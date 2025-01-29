import {
  SiTypescript,
  SiNextdotjs,
  SiBun,
  SiTailwindcss,
  SiDrizzle,
  SiDocker,
  SiGit,
  SiLinux,
  SiPython,
  SiGnometerminal,
} from "react-icons/si"; // Import necessary icons

interface TechnologyProps {
  isVisible: boolean;
  delay: number;
}

const tools = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.JS", icon: SiNextdotjs },
  { name: "Bun", icon: SiBun },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Linux", icon: SiLinux },
  { name: "Bash", icon: SiGnometerminal },
  { name: "Python", icon: SiPython },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "Drizzle", icon: SiDrizzle, hiddenOnMobile: true },
];

export default function Technology({ isVisible, delay }: TechnologyProps) {
  return (
    <section
      className={`mb-8 opacity-0 ${isVisible ? "animate-fade-in" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h2 className="mb-4 text-base font-semibold">Technology</h2>
      <p className="font-light text-secondary">
        I leverage a diverse range of tools. These invaluable resources not only
        optimise my coding practices but also elevate the overall quality of my
        projects. You can view a select range of them below:
      </p>
      <div className="mt-8 grid grid-cols-3 gap-x-8 gap-y-4 text-sm font-normal text-secondary md:grid-cols-5">
        {tools.map((tool) => (
          <div key={tool.name} className="flex items-center">
            {tool.hiddenOnMobile ? (
              <div className="hidden md:flex">
                <tool.icon className="mr-2 rounded-sm text-xl" />
                <span>{tool.name}</span>
              </div>
            ) : (
              <>
                <tool.icon className="mr-2 flex-shrink-0 rounded-sm text-xl" />
                <span>{tool.name}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
