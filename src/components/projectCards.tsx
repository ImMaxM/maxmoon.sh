"use client";
import React, { useEffect, useState } from "react";
import CardLoading from "./cardsLoading";
import { FaCodeBranch, FaStar } from "react-icons/fa";

interface Projects {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

const ProjectCards = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Projects[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ImMaxM/repos?sort=stars&per_page=4")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  const loadingCards = [1, 2, 3, 4].map((n) => <CardLoading key={n} />);

  const projectCards = projects.map((project) => (
    <a href={project.html_url} target="_blank" key={project.id}>
      <div className="p-4 flex items-center h-auto rounded-md border-2 border-stroke">
        <div className="text-white font-body">
          <a className="font-normal">ImMaxM/{project.name}</a>
          <div className="flex flex-col">
            <p className="text-sm text-secondary pt-2">
              {project.description
                ? project.description
                : "👻 No project description..."}
            </p>
          </div>
          <div className="flex items-center mt-2">
            <FaStar className="mr-1" />
            <div className="text-sm text-secondary">
              {project.stargazers_count}
            </div>
            <FaCodeBranch className="ml-2 mr-2" />
            <div className="text-sm text-secondary">{project.forks_count}</div>
          </div>
        </div>
      </div>
    </a>
  ));

  return (
    <div className="sm:px-4 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
      {loading ? loadingCards : projectCards}
    </div>
  );
};

export default ProjectCards;
