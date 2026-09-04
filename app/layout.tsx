import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seto Yoki — Full-Stack Developer & UI/UX Engineer",
  description: "Seto Yoki portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
