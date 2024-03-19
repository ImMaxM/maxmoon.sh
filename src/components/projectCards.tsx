"use client";
import { useEffect, useState } from "react";
import { FaCodeBranch, FaStar } from "react-icons/fa";
import CardLoading from "./cardsLoading";

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
    fetch("https://api.github.com/users/ImMaxM/repos?per_page=4")
      .then((res) => res.json())
      .then((data) =>
        data.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      )
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  const loadingCards = [1, 2, 3, 4].map((n) => <CardLoading key={n} />);

  const projectCards = projects.map((project) => (
    <a
      href={project.html_url}
      target="_blank"
      key={project.id}
      data-umami-event="Project Card"
      data-umami-event-repository-name={project.name}
      data-umami-event-repository-url={project.html_url}
    >
      <div className="p-4 min-h-full rounded-md border-2 border-stroke bg-background">
        <div className="text-white font-body">
          <p className="font-normal">ImMaxM/{project.name}</p>
          <div className="flex flex-col">
            {/* If the project descriptions spans more than 2 lines, cut it off with ... */}
            <p
              className="text-sm text-secondary pt-2 line-clamp-2"
              title={project.description}
            >
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
