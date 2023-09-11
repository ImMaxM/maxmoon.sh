import React from "react";
import TechBar from "./techBar";

const Tech = () => {
  return (
    <div className="">
      <div className="flex items-center">
        <a className="text-accent font-bold text-3xl invisible md:visible">#</a>
        <h1 className="md:pl-4 font-bold text-3xl">Technology</h1>
      </div>
      <h2 className="pl-4 md:pl-8 pt-2 font-normal text-secondary">
        I leverage a diverse range of tools. These invaluable resources not only
        optimize my coding practices but also elevate the overall quality of my
        projects. You can view a select range of them below:
      </h2>
      <div className="pt-4">
        <TechBar />
      </div>
    </div>
  );
};

export default Tech;
