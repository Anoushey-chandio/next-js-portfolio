import AboutMe from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import ServiceCarousel from "@/components/ServiceCarousel";


export default function Home() {
  return (
    <div>

      <Hero></Hero>

       <AboutMe />

         <Projects />
         <ServiceCarousel />
          <Contact />

    </div>
  );
}
