import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
          defer
          data-domain="maxuk.me"
          src="https://web.maxuk.me/js/script.outbound-links.js"
        ></script>
      </head>
      <body className={JBM.className}>{children}</body>
    </html>
  );
}
