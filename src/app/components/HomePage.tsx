import React from "react";
import Image from "next/image";
import cactusPlant from "../../../public/assets/cactusPlant.svg";
import aloveraPlant from "../../../public/assets/aloveraPlant.svg";
import GoogleMapComponent from "./GoogleMapComponent";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center bg-[#00241C] w-full pb-56 text-white pt-28  p-5 sm:p-20 relative">
      {/* <Image
      src={cactusPlant}
      alt="cactus"
      className="absolute top-96 right-0"
      />
      <Image
      src={aloveraPlant}
      alt="cactus"
      className="absolute top-40 left-24"
      /> */}
      <div className="flex flex-col justify-center items-center gap-4 z-10">
        <h1 className="text-3xl text-center">Citizens&apos; Portal of Medicinal Plants</h1>
        <p className="text-xl text-center">Your Guide to Nature&apos;s Pharmacy!</p>
      </div>
      <div className="pt-16 text-sm text-center z-10">
        <p>Type your term below and let’s start this journey together!</p>
      </div>

      <div className="py-10 w-[100%] z-10">
        <div className="flex rounded-t-2xl bg-black z-10 w-[90%] sm:w-[50%] mx-auto">
          <h4 className="py-1 px-2 sm:py-2 sm:px-4 md:py-3 md:px-5 bg-white rounded-tl-2xl rounded-br-none text-black text-xs sm:text-sm md:text-base">
            For Human Use
          </h4>
          <h4 className="py-1 px-2 sm:py-2 sm:px-4 md:py-3 md:px-5 text-xs sm:text-sm md:text-base">
            For Animal(Mruga) Use
          </h4>
          <h4 className="py-1 px-2 sm:py-2 sm:px-4 md:py-3 md:px-5 text-xs sm:text-sm md:text-base">
            For Plant(Vruksha) Use
          </h4>
        </div>

        {/* this is the search section  */}
        <div className="flex justify-evenly bg-white text-black p-2 sm:p-3 md:p-5 z-10 w-[100%] sm:w-[60%] mx-auto rounded-2xl">
          <div className="flex flex-col flex-1">
            <select
              name="primary-term"
              id="primary-term"
              className="w-28 sm:w-36 md:w-44 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base"
            >
              <option value="Primary">Primary Term</option>
              <option value="Primary Term">Primary Term</option>
              <option value="Primary Term">Primary Term</option>
              <option value="Primary Term">Primary Term</option>
            </select>
            <label className="text-xs sm:text-sm md:text-base">
              Enter the term
            </label>
          </div>
          <div className="flex flex-col flex-1 md:w-56 " >
            <select
              name="secondary-term"
              id="secondary-term"
              className="w-28 sm:w-36 md:w-44 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base"
            >
              <option value="volvo">Secondary Term</option>
              <option value="Secondary Term">Secondary Term</option>
              <option value="Secondary Term">Secondary Term</option>
              <option value="Secondary Term">Secondary Term</option>
            </select>
            <label className="text-xs sm:text-sm md:text-base">
              Enter the term
            </label>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <button className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-black text-white rounded text-xs sm:text-sm md:text-base">
              Search
            </button>
          </div>
        </div>

      </div>
      <div className="relative">
        <h1 className="py-7 pb-16 z-10">Find Herbs in a Specific Location/Region</h1>
      </div>


        <GoogleMapComponent/>


    </div>
  );
};

export default HomePage;
