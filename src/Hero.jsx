import React from "react";
import logo from "./assets/logo.svg";

function Hero() {
  return (
    <section id="hero" className="py-32 w-full">
      <div className="container grid lg:grid-cols-2 gap-24 justify-between items-center">
        <article className="flex flex-col gap-8">
          <h1 className="max-w-[507px] text-red-600 text-5xl lg:text-7xl font-normal font-VremenaGro ">
            The Christmas Tradition{" "}
          </h1>
          <div className="max-w-[522px] text-red-600 text-base font-normal font-['Vremena Grotesk'] leading-loose tracking-tight">
            Elf on a shelf, the infamous Christmas tradition dates back since
            2005 and has become viral over the last couple of years with
            hundreds of millions of views on TikTok, Instagram, and Facebook.
          </div>
        </article>
        <img src={logo} alt="logo" className="ml-auto" />
      </div>
    </section>
  );
}

export default Hero;
