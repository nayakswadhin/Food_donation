import Image from "next/image";
import React from "react";
import img from "public/about1.jpg.webp";
import "./Programs.css";

function Programs() {
  return (
    <div className="bg-[#fcf2eb] flex justify-around items-center p-8">
      <Image src={img} alt="About us Image" height={"500"} width={"500"} />
      <div className="basis-[45%]">
        <h4 className="text-lg text-[#65c9bc] py-3">Upcoming Program</h4>
        <h1 className="text-[#263b5c] text-5xl font-semibold">
          Donate vitamin B12 supply program
        </h1>
        <p className="text-lg font-semibold opacity-50 py-7">
          When a child gets access to good food, it can change just about
          everything. Sed do eiusmod tempor incididunt dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation
        </p>
        <div className="flex gap-10 text-xl">
          <button className="border-2 border-solid border-[#f15b43] bg-[#f15b43] py-4 px-6 text-[#fbf4fe] font-semibold hover:bg-white hover:text-[#f15b43] transition-all ease-in-out">
            Donate Now
          </button>
          <button className="program text-[#f15b43] border-2 border-solid border-[#f15b43] py-4 px-6 font-medium">
            View Program
          </button>
        </div>
      </div>
    </div>
  );
}

export default Programs;
