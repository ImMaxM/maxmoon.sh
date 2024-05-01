import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import NavBar from "@/components/ui/navbar";

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
      <body className={JBM.className}>
        <div className="flex min-h-screen flex-col items-center p-4 md:p-8 bg-background">
          <div
            className="hidden md:block absolute z-5"
            style={{ pointerEvents: "none" }}
          >
            <svg
              width="1195"
              height="1486"
              viewBox="0 0 1195 1486"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_0_1)">
                <ellipse
                  cx="706.658"
                  cy="441.271"
                  rx="83.249"
                  ry="219.443"
                  transform="rotate(56.1926 706.658 441.271)"
                  fill="#2A133D"
                />
              </g>
              <g filter="url(#filter1_f_0_1)">
                <ellipse
                  cx="426"
                  cy="1037.6"
                  rx="164.184"
                  ry="104.28"
                  transform="rotate(56.1926 426 1037.6)"
                  fill="#2A133D"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_0_1"
                  x="218.484"
                  y="0.915268"
                  width="976.349"
                  height="880.712"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="150"
                    result="effect1_foregroundBlur_0_1"
                  />
                </filter>
                <filter
                  id="filter1_f_0_1"
                  x="0.0906982"
                  y="589.312"
                  width="851.819"
                  height="896.574"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="150"
                    result="effect1_foregroundBlur_0_1"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="sticky top-8 w-full max-w-[900px] z-20">
            <NavBar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
