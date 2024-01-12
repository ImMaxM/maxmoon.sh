"use client";
import { useEffect, useState } from "react";
import ProjectCards from "./projectCards";

interface Data {
  repositoryCount: number;
}

const Projects = () => {
  const [GHData, setGHData] = useState<Data>({
    repositoryCount: 0,
  });

  useEffect(() => {
    fetch("https://api.github.com/users/ImMaxM")
      .then((res) => res.json())
      .then((data) => {
        setGHData({
          repositoryCount: data.public_repos,
        });
      });
  }, []);

  return (
    <div className="">
      <div className="flex items-center">
        <a className="text-accent font-bold text-3xl invisible md:visible">#</a>
        <h1 className="md:pl-4 font-bold text-3xl">Projects</h1>
      </div>
      <h2 className="pl-4 md:pl-8 pt-2 font-normal text-secondary">
        I spend most of my time developing fun and interesting projects to
        enhance my knowledge and skills. I have a total of{" "}
        {GHData.repositoryCount} repositories, you can view a few of my most
        popular ones below:
      </h2>
      <div className="pt-4">
        <ProjectCards />
      </div>
    </div>
  );
};

export default Projects;
