interface AboutProps {
  isVisible: boolean;
  delay: number;
}

export default function About({ isVisible, delay }: AboutProps) {
  return (
    <section
      className={`mb-8 opacity-0 ${isVisible ? "animate-fade-in" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h2 className="mb-4 text-base font-semibold">About me</h2>
      <p className="text-secondary font-light">
        I am constantly fuelled by my passion for all things tech. I eagerly
        delve into the ever-evolving world of technology, staying up-to-date
        with the latest advancements and emerging trends. From the exciting
        realm of AI and machine learning to the dynamic fields of TypeScript and
        JavaScript, I find joy in exploring the intricacies of coding and
        harnessing its potential.
      </p>
    </section>
  );
}
