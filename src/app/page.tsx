"use client";

import Hero from "./components/Hero";
import Profile from "./components/Profile";
import About from "./components/About";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen text-white">
      <script
        defer
        src="https://web.maxmoon.sh/script.js"
        data-website-id="93fdf6d3-da9a-4f58-ac94-6e0536673641"
      ></script>
      <div className="mx-auto max-w-3xl py-12">
        <Hero isVisible={isLoaded} delay={0} />
        <div className="px-8">
          <Profile isVisible={isLoaded} delay={150} />
          <About isVisible={isLoaded} delay={300} />
          <Technology isVisible={isLoaded} delay={450} />
          <Projects isVisible={isLoaded} delay={600} />
          <Footer isVisible={isLoaded} delay={750} />
        </div>
      </div>
    </main>
  );
}
