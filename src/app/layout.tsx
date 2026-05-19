import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "VoiceCharisma AI — Trenuj głos, dykcję i pewność siebie",
  description:
    "Aplikacja do treningu głosu, dykcji, komunikacji przed kamerą, rozbudowy słownictwa i autoprezentacji.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="min-h-screen bg-background text-white">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
