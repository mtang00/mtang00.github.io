import { Navigation } from './components/molecules/Navigation';
import { Hero } from './components/organisms/Hero';
import { About } from './components/organisms/About';
import { Projects } from './components/organisms/Projects';
import { Skills } from './components/organisms/Skills';
import { Workflow } from './components/organisms/Workflow';
import { Education } from './components/organisms/Education';
import { Contact } from './components/organisms/Contact';
import { Footer } from './components/organisms/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Workflow />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;