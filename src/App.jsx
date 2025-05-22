import Header from './components/Header';
import Hero from './components/Hero1';
import About from './components/About';
import Projects from './components/Project';
import Resume from './components/Resume';
import Contact from './components/contact';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="projects">
        <Resume />
      </section>
      
      <section id="projects">
        <Contact />
      </section>
      <Footer/>
    </div>
  );
}

export default App;
