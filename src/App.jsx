import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import SoftSkills from './components/SoftSkills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useTheme } from './hooks.js';

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
