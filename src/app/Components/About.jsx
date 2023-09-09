import Image from "next/image";
import React from "react";
import img2 from "public/about2.png.webp";

function About() {
  return (
    <div className="p-24 flex justify-around items-center gap-5">
      <div className="basis-[45%]">
        <h4 className="text-xl text-[#65c9bc] py-6">About Us</h4>
        <h2 className="text-[#263b5c] text-5xl font-semibold py-3">
          We are tender heart charity foundation.
        </h2>
        <p className="text-lg font-semibold opacity-40 py-7">
          When a child gets access to good food, it can change just about
          everything. Sed do eiusmod tempor incididunt dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation
        </p>
        <button className="border-2 border-solid border-[#f15b43] bg-[#f15b43] py-4 my-3 px-6 text-[#fbf4fe] font-semibold hover:bg-white hover:text-[#f15b43] transition-all ease-in-out">
          Discover More
        </button>
      </div>
      <div>
        <Image
          src={img2}
          alt="foodDonation image"
          height={"800"}
          width={"800"}
        />
      </div>
    </div>
  );
}

export default About;
