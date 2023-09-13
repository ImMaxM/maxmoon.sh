import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import PlausibleProvider from "next-plausible";

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
        <PlausibleProvider
          domain="maxuk.me"
          customDomain="https://web.maxuk.me"
          scriptProps={{
            src: "/stats/js/script.js",
            "data-api": "/stats/api/event",
          }}
          selfHosted={true}
          trackOutboundLinks={true}
        />
      </head>
      <body className={JBM.className}>{children}</body>
    </html>
  );
}
