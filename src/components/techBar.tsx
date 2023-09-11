"use client";

import React from "react";
import {
  SiTypescript,
  SiDocker,
  SiVisualstudiocode,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiUbuntu,
  SiGit,
  SiRedis,
  SiFigma,
  SiNginx,
  SiPython,
  SiLua,
  SiGnubash,
} from "react-icons/si";
import { Tooltip } from "react-tooltip";

const TechBar = () => {
  return (
    <div className="items-center align-middle">
      <div className="flex flex-row items-center justify-between mx-auto w-fit px-2 py-2 bg-box rounded-md border-2 border-stroke">
        <div className="flex font-body flex-wrap gap-x-2.5 mx-2 justify-evenly">
          {tech.map((item, index) => (
            <div key={index}>
              <a
                data-tooltip-id={item.name}
                data-tooltip-content={item.name}
                data-tooltip-place="top"
                className="text-secondary text-4xl"
              >
                {item.icon}
              </a>
              <Tooltip id={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechBar;

const tech = [
  {
    name: "Typescript",
    icon: <SiTypescript />,
  },
  {
    name: "Visual Studio Code",
    icon: <SiVisualstudiocode />,
  },
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
  },
  {
    name: "Javascript",
    icon: <SiJavascript />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
  },
  {
    name: "Ubuntu",
    icon: <SiUbuntu />,
  },
  {
    name: "Git",
    icon: <SiGit />,
  },
  {
    name: "Redis",
    icon: <SiRedis />,
  },
  {
    name: "Figma",
    icon: <SiFigma />,
  },
  {
    name: "Nginx",
    icon: <SiNginx />,
  },
  {
    name: "Python",
    icon: <SiPython />,
  },
  {
    name: "Docker",
    icon: <SiDocker />,
  },
  {
    name: "Lua",
    icon: <SiLua />,
  },
  {
    name: "Bash",
    icon: <SiGnubash />,
  },
];
