import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Mics from "./Mics";
import Footer from "./Footer";

function App() {
  return (
    <section className="min-h-screen w-full bg-[#103D6C] font-VremenaGro text-white">
      <Header />
      <Hero />
      <About />
      <Mics />
      <Footer />
    </section>
  );
}

export default App;
