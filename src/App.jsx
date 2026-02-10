import { Navbar } from "./layouts/Navbar";
import { Footer } from "./layouts/footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";

import '@/index.css'
function App() {


  return (
    
  <div className="min-h-screen overflow-x-hidden">
  <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </div>

  );
}
export default App
