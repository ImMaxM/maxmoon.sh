import About from "@/components/about";
import Banner from "@/components/banner";
import Footer from "@/components/ui/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Tech from "@/components/tech";

export default function Home() {
  return (
    <>
      <div className="w-full max-w-[900px] z-10">
        <Banner />
      </div>
      <div className="flex flex-col w-full max-w-[840px] gap-8 text-white z-10">
        <Hero />
        <About />
        <Tech />
        <Projects />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
