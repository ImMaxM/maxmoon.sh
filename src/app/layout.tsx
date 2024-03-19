import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const JBM = JetBrains_Mono({
  subsets: ["latin"],
  // display: "swap",
});

export const metadata: Metadata = {
  title: "Max Moon • Full Stack Developer",
  description:
    "I'm a student who is passionate about everything tech, from Backend to Web Development and Cyber Security.",
  themeColor: "#5D56AB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://web.maxuk.me/script.js"
          data-website-id="5ead0e3c-3c16-4af7-a2c9-da5376a06a80"
        ></Script>
      </head>
      <body className={JBM.className}>{children}</body>
    </html>
  );
}
