import Image from "next/image";

import F1ScoutImage from "../../../public/images/f1scout.png";
import MCStorageImage from "../../../public/images/mcstorage.png";
import PortfolioImage from "../../../public/images/portfolio.png";

interface ProjectsProps {
  isVisible: boolean;
  delay: number;
}

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  image: string;
}

const repos: Repo[] = [
  {
    id: 1,
    name: "MCStorage",
    description:
      "MCStorage was a BaaS provider I created with a friend. It integrated directly into Minecraft to provide a seamless backup experience. We later sold the project, and it is now under different management.",
    html_url:
      "https://web.archive.org/web/20220306183052/https://mcstorage.cloud/",
    image: MCStorageImage.src,
  },
  {
    id: 2,
    name: "GridScout/Bot",
    description:
      "🏎️ A Discord bot that can help you find information about your favorite F1 drivers & more.",
    html_url: "https://github.com/GridScout/Bot",
    image: F1ScoutImage.src,
  },
  {
    id: 3,
    name: "ImMaxM/maxmoon.sh",
    description: "💻 The repository behind my portfolio site (maxmoon.sh)",
    html_url: "https://github.com/ImMaxM/maxmoon.sh",
    image: PortfolioImage.src,
  },
];

export default function Projects({ isVisible, delay }: ProjectsProps) {
  return (
    <section
      className={`mb-8 opacity-0 ${isVisible ? "animate-fade-in" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h2 className="mb-4 text-base font-semibold">What I&apos;m working on</h2>
      <p className="font-light text-secondary">
        I spend most of my time developing fun and interesting projects to
        enhance my knowledge and skills. You can view a select range of my past
        projects below:
      </p>
      <div className="mt-2 flex flex-col gap-4 pt-4">
        {repos.map((repo) => (
          <div key={repo.id} className="flex flex-col rounded-md shadow-md">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <div className="flex-shrink-0 md:mr-4">
                <Image
                  src={repo.image}
                  alt={repo.name}
                  width={128}
                  height={64}
                  className="hidden max-h-16 rounded-lg object-cover md:block"
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-primary">
                  {repo.name}
                </h3>
                <p className="line-clamp-3 text-sm font-normal text-secondary">
                  {repo.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
