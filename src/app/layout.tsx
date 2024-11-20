import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Codana - Building Tomorrow's Software",
  description: "Professional software development agency in Heilbronn, Germany. We create custom software solutions, mobile apps, and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ubuntu.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
