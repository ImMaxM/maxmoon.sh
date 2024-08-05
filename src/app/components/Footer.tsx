import React from "react";
import { CgGitPull } from "react-icons/cg";

interface FooterProps {
  isVisible: boolean;
  delay: number;
}

const Footer: React.FC<FooterProps> = ({ isVisible, delay }) => {
  return (
    <footer
      className={`mt-8 opacity-0 ${isVisible ? "animate-fade-in" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mt-16 text-center text-sm text-secondary">
        <div className="border-stroke mx-auto w-64 border-t-2 pb-6 opacity-10" />
        <a>view the </a>
        <a
          className="underline decoration-dashed underline-offset-2"
          href="https://github.com/ImMaxM/maxmoon.sh"
          target="_blank"
        >
          source
        </a>
        <div className="flex items-center justify-center pt-2">
          <CgGitPull className="text-lg text-secondary" />
          <a className="text-sm font-medium text-secondary">
            {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.substring(0, 7) ??
              "Unknown"}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
