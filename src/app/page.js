import Navigation from "../app/components/Navigation";
import Hero from "../app/components/Hero";
import About from "../app/components/About";
import WorkExperience from "../app/components/WorkExperience";
import Projects from "../app/components/Projects";
import Footer from "../app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}