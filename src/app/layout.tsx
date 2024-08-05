import "~/styles/globals.css";

import { type Metadata } from "next";

import localFont from "next/font/local";

const Satoshi = localFont({ src: "../../public/fonts/satoshi.woff2" });

export const metadata: Metadata = {
  title: "Max Moon • Full-stack Developer",
  description:
    "I'm a student who is passionate about everything tech, from Backend to Web Development and Cyber Security.",
  themeColor: "#5D56AB",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${Satoshi.className}`}>
      <body>{children}</body>
    </html>
  );
}
