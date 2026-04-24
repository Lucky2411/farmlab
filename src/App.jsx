import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Value from "./components/Value";
import Impact from "./components/Impact";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Products from "./components/Products";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Value />
      <Impact />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}