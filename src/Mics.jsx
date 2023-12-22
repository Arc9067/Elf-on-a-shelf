import React from "react";
import mics from "./assets/mics.svg";
import img1 from "./assets/img1.svg";
import img2 from "./assets/img2.svg";
import img3 from "./assets/img3.svg";

function Mics() {
  return (
    <section id="about" className="py-32 w-full">
      <div className="container relative flex justify-center items-center flex-col">
        <img src={mics} alt="" className="pointer-events-none" />

        <div className="grid w-full mt-32 grid-cols-1 lg:grid-cols-3 justify-between items-center gap-12">
          <article className="h-[350px] gap-2.5 py-7 rounded-2xl flex flex-col justify-between items-center bg-[#FA8700]">
            <img src={img1} alt="" className="" />
            <h1 className="text-white text-center text-3xl font-bold font-ClashDisplayBold leading-10">
              12,250,230,000 <br /> Supply
            </h1>
          </article>
          <article className="h-[350px] gap-2.5 py-7 rounded-2xl flex flex-col justify-between items-center bg-[#0074C9]">
            <img src={img2} alt="" className="" />
            <h1 className="text-white text-center text-3xl font-bold font-ClashDisplayBold leading-10">
              0/0 <br /> Tax
            </h1>
          </article>{" "}
          <article className="h-[350px] gap-2.5 py-7 rounded-2xl flex flex-col justify-between items-center bg-[#00C968]">
            <img src={img3} alt="" className="" />
            <h1 className="text-white text-center text-3xl font-bold font-ClashDisplayBold leading-10">
              2% <br /> Max txn{" "}
            </h1>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Mics;
