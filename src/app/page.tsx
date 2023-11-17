import About from "@/components/about";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Tech from "@/components/tech";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-16 bg-background">
      <div className="w-full max-w-[900px]">
        <Banner />
      </div>
      <div className="flex flex-col w-full max-w-[840px] gap-8 text-white">
        <Hero />
        <About />
        <Tech />
        <Projects />
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
