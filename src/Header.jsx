import React from "react";

function Header() {
  return (
    <header className="py-4 w-full absolute top-0">
      <nav className="container flex justify-between items-center">
        <h1 className="text-red-600 text-[32px] font-bold font-SpaceGro">
          Elf on a shelf{" "}
        </h1>{" "}
        <div className="hidden px-[39px] pt-4 pb-[17px] bg-white rounded-full justify-center items-center lg:inline-flex">
          <ul className="self-stretch justify-start items-start gap-16 inline-flex">
            <li className="text-red-600 text-base font-normal font-['Inter']">
              Home
            </li>
            <li className="text-red-600 text-base font-normal font-['Inter']">
              About
            </li>
            <li className="text-red-600 text-base font-normal font-['Inter']">
              Tokenomics
            </li>
          </ul>
        </div>
        <a href="" className="w-[181px] h-[52px] hidden  md:block relative">
          <div className="w-[173px] h-11 left-[8px] top-[8px] absolute bg-yellow-400" />
          <div className="w-[177px] px-6 py-3.5 left-0 top-0 absolute bg-red-600 border border-red-600 justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-base font-bold font-['Space Grotesk']">
              Telegram
            </div>
          </div>
        </a>
      </nav>
    </header>
  );
}

export default Header;
