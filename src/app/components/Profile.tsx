interface ProfileProps {
  isVisible: boolean;
  delay: number;
}

export default function Profile({ isVisible, delay }: ProfileProps) {
  return (
    <div
      className={`mb-8 mt-20 opacity-0 ${isVisible ? "animate-fade-in" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h1 className="text-xl font-extrabold">Max Moon</h1>
      <h2 className="text-secondary pt-1 font-normal">
        👨🏼‍💻 Full-stack developer
        <br />
        📍 Hampshire, England
      </h2>
    </div>
  );
}
