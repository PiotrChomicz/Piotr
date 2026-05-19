export type AudioRecording = {
  blob: Blob;
  url: string;
  durationSec: number;
  mimeType: string;
};

export type AudioRecorderState = "idle" | "recording" | "stopped" | "error";

export interface AudioRecorderHandle {
  start(): Promise<void>;
  stop(): Promise<AudioRecording>;
  cancel(): void;
  getState(): AudioRecorderState;
}

export async function createAudioRecorder(): Promise<AudioRecorderHandle> {
  if (typeof window === "undefined" || !navigator.mediaDevices) {
    throw new Error("MediaRecorder dostępny tylko w przeglądarce.");
  }

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const mimeCandidates = [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/ogg;codecs=opus",
    "audio/mp4",
  ];
  const mimeType =
    mimeCandidates.find((t) => MediaRecorder.isTypeSupported(t)) || "";

  const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
  const chunks: BlobPart[] = [];
  let state: AudioRecorderState = "idle";
  let startedAt = 0;

  recorder.ondataavailable = (e) => {
    if (e.data.size > 0) chunks.push(e.data);
  };

  return {
    async start() {
      chunks.length = 0;
      startedAt = Date.now();
      recorder.start(250);
      state = "recording";
    },
    async stop() {
      return new Promise<AudioRecording>((resolve) => {
        recorder.onstop = () => {
          const blob = new Blob(chunks, {
            type: mimeType || "audio/webm",
          });
          const url = URL.createObjectURL(blob);
          const durationSec = Math.max(0, (Date.now() - startedAt) / 1000);
          stream.getTracks().forEach((t) => t.stop());
          state = "stopped";
          resolve({ blob, url, durationSec, mimeType: blob.type });
        };
        recorder.stop();
      });
    },
    cancel() {
      try {
        if (recorder.state !== "inactive") recorder.stop();
      } finally {
        stream.getTracks().forEach((t) => t.stop());
        state = "idle";
      }
    },
    getState() {
      return state;
    },
  };
}
