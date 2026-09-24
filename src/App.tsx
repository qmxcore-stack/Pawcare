import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Proof from './components/Proof';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero />
      <Benefits />
      <Problem />
      <Solution />
      <Proof />
      <Testimonials />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
