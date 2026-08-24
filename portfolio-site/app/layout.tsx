import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import CustomCursor from "@/components/CustomCursor";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "권지민 — Frontend Developer",
  description: "풀스택 개발자 권지민의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-fg antialiased">
        <CustomCursor />
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-border">
          <div className="mx-auto max-w-5xl px-6 py-8 font-mono text-xs text-fg-faint">
            $ echo &quot;built with Next.js, TypeScript, Tailwind&quot;
          </div>
        </footer>
      </body>
    </html>
  );
}
