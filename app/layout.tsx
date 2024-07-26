import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Telegram Equb Application",
  description: "Interactive Equb Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js" />
        {/* <script src="https://telegram.org/js/telegram-web-app.js" Strategy="beforeInteractive" /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
