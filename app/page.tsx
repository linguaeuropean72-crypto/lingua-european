import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Courses from "./components/Courses";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>

      <Navbar />

      <main className="min-h-screen bg-white">

        <Hero />

        <Features />

        <About />

        <Courses />

        <Statistics />

        <Testimonials />

        <Gallery />

        <Contact />

      </main>

      <Footer />

    </>
  );
}