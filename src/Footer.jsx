import React from "react";
import telegram from "./assets/telegram.svg";
import twitter from "./assets/twitter.svg";
import chart from "./assets/dextools.svg";
import etherscan from "./assets/etherscan.svg";

function Footer() {
  return (
    <footer className="py-9">
      <div className="container flex flex-col lg:flex-row justify-between items-center">
        <div className="flex justify-between items-center flex-col lg:flex-row w-full lg:grid-cols-3 justify-between items-center gap-6 mt-16">
          <a
            href=""
            className="logo text-white flex items-center gap-2 font-ClashDisplayMed capitalize text-xl"
          >
            <h2 className="hin">Elf on a shelf</h2>
          </a>
          <p className="text-white text-sm font-normal font-['Clash Display'] leading-relaxed">
            Copyright © {new Date().getFullYear()} Elf on a shelf All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://t.me/JollyTheElf">
              <img src={telegram} alt="telegram icon" />
            </a>
            <a href="https://twitter.com/JollyTheElfETH">
              <img src={twitter} alt="twitter icon" />
            </a>
            <a href="">
              <img src={chart} alt="chart icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
