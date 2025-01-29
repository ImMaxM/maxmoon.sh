import "~/styles/globals.css";

import { type Metadata } from "next";

import localFont from "next/font/local";

const Satoshi = localFont({ src: "../../public/fonts/satoshi.woff2" });

import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#5D56AB",
};

export const metadata: Metadata = {
  title: "Max Moon • Full-stack Developer",
  description:
    "I'm a student who is passionate about everything tech, from Backend to Web Development and Cyber Security.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${Satoshi.className} bg-background`}>
      <body>{children}</body>
    </html>
  );
}
