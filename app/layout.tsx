import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yassine Lahyani — Data Analyst & AI Engineer",
  description:
    "Portfolio of Yassine Lahyani — Data Analyst, Data Engineer, and AI enthusiast specializing in business intelligence, machine learning, and full-stack development.",
  keywords: [
    "Data Analyst",
    "Data Engineer",
    "Machine Learning",
    "Power BI",
    "Python",
    "AI",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} scroll-smooth`}
    >
      <body className="bg-slate-950 antialiased">{children}</body>
    </html>
  );
}
