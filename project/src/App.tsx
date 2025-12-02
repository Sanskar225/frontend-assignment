import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <CaseStudies />
      <About />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
