import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex items-center">
        <a className="text-accent font-bold text-3xl invisible md:visible">#</a>
        <h1 className="md:pl-4 font-bold text-3xl">About Me</h1>
      </div>
      <h2 className="pl-4 md:pl-8 pt-2 font-normal text-secondary">
        I am constantly fueled by my passion for all things tech. I eagerly
        delve into the ever-evolving world of technology, staying up-to-date
        with the latest advancements and emerging trends. From the exciting
        realm of AI and machine learning to the dynamic fields of TypeScript and
        JavaScript, I find joy in exploring the intricacies of coding and
        harnessing its potential.
      </h2>
    </div>
  );
};

export default About;
