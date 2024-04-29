import React from "react";
import { CgGitPull } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="bottom-0 text-center pt-16">
      <div className="border-t-2 border-stroke w-64" />
      <div className="text-sm font-medium text-secondary pt-12">
        <a>view the </a>
        <a
          className="underline decoration-dashed underline-offset-4"
          href="https://github.com/ImMaxM/maxuk.me"
          target="_blank"
        >
          source
        </a>
      </div>
      <div className="flex justify-center items-center pt-4">
        <CgGitPull className="text-secondary text-xl" />
        <a className="text-secondary text-sm font-medium">
          {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.substring(0, 7) ??
            "Unknown"}
        </a>
      </div>
    </div>
  );
};

export default Footer;
