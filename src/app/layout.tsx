import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const JBM = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
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
        <script
          defer={true}
          data-domain="maxuk.me"
          src="https://maxuk.me/js/script.js"
        ></script>
      </head>
      <body className={JBM.className}>{children}</body>
    </html>
  );
}
