import Experience from "./components/experience/Experience";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/navbar";
import Skills from "./components/Skills/Skills";
import Contact from "./components/contact/Contact"
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <div className="pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

