import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

export const metadata: Metadata = {
  title: "alockinalock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="images/favicon.ico" sizes="any"/>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
