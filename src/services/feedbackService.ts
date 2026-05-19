import type { AIFeedback, Recording } from "@/types";
import { mockFeedback } from "@/data/mockFeedback";

export async function generateVoiceFeedback(
  recording: Recording
): Promise<AIFeedback> {
  await delay(400);
  return { ...mockFeedback, recordingId: recording.id };
}

export async function transcribeRecording(
  recording: Recording
): Promise<string> {
  await delay(300);
  return "To jest przykładowa transkrypcja nagrania. W MVP zwracamy mock data — prawdziwa transkrypcja podłączona w etapie integracji.";
}

export async function calculateVoiceScore(
  recording: Recording
): Promise<number> {
  await delay(100);
  return mockFeedback.score.overall + Math.floor(recording.durationSec % 5);
}

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}
