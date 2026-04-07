import { useInView } from 'react-intersection-observer';
import Experience from "./components/experience/Experience";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/navbar";
import Skills from "./components/Skills/Skills";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  const { ref: homeRef } = useInView({ threshold: 0.5 });
  const { ref: aboutRef } = useInView({ threshold: 0.5 });
  const { ref: experienceRef } = useInView({ threshold: 0.5 });
  const { ref: skillsRef } = useInView({ threshold: 0.5 });
  const { ref: projectsRef } = useInView({ threshold: 0.5 });
  const { ref: contactRef } = useInView({ threshold: 0.5 });

  return (
    <div className="bg-[#171d32] w-full flex flex-col overflow-auto">
      <Navbar />
      <div className="pt-28 flex-grow">
        <div ref={homeRef} id="home" className="py-20 flex items-center justify-center">
          <Home />
        </div>
        <div ref={aboutRef} id="about" className="py-20 flex items-center justify-center">
          <About />
        </div>
        <div ref={experienceRef} id="experience" className="py-20 flex items-center justify-center">
          <Experience />
        </div>
        <div ref={skillsRef} id="skills" className="py-20 flex items-center justify-center">
          <Skills />
        </div>
        <div ref={projectsRef} id="projects" className="py-20 flex items-center justify-center">
          <Projects />
        </div>
        <div ref={contactRef} id="contact" className="py-20 flex items-center justify-center">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

