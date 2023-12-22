import React from "react";
import about from "./assets/about.svg";
import aboutImg from "./assets/aboutImg.svg";
import abso1 from "./assets/abso1.svg";
import abso2 from "./assets/abso2.svg";
import abso3 from "./assets/abso3.svg";

function About() {
  return (
    <section id="about" className="py-32 w-full">
      <div className="container relative flex justify-center items-center flex-col">
        <img src={about} alt="" className="pointer-events-none" />
        <img
          src={abso1}
          alt=""
          className="absolute top-44 right-0 w-[5rem] md:w-auto"
        />
        <img
          src={abso2}
          alt=""
          className="absolute top-0 left-0 w-[5rem] md:w-auto"
        />

        <div className="grid relative mt-20 lg:grid-cols-2 gap-24 justify-between items-center">
          <article className="flex flex-col gap-8">
            <h1 className="max-w-[507px] text-white text-5xl font-normal font-['Vremena Grotesk']">
              Ho-Ho-Ho{" "}
            </h1>
            <img
              src={abso2}
              alt=""
              className="absolute -bottom-28 left-0 w-[5rem] md:w-auto"
            />
            <p className="max-w-[522px] text-white text-base font-normal font-['Space Grotesk'] leading-loose tracking-tight">
              You know Dasher and Dancer And Prancer and Vixen, Comet and Cupid
              And Donner and Blitzen. But do you recall The most famous Elf on
              the shelf of all
              <br />
              <br />
              Whether you go along with the tradition for your daughter or son,
              there’s plenty of memories to be made with Jolly that’s fun.
            </p>
            <a href="https://t.me/JollyTheElf" className="w-[181px] h-[52px] block relative">
              <div className="w-[173px] h-11 left-[8px] top-[8px] absolute bg-yellow-400" />
              <div className="w-[177px] px-6 py-3.5 left-0 top-0 absolute bg-red-600 border border-red-600 justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-base font-bold font-['Space Grotesk']">
                  Telegram
                </div>
              </div>
            </a>
          </article>
          <img src={aboutImg} alt="logo" className="ml-auto" />
        </div>
      </div>
    </section>
  );
}

export default About;
