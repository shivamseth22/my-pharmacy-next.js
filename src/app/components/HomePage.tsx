import React from "react";
import Image from "next/image";
import cactusPlant from "../../../public/assets/cactusPlant.svg";
import aloveraPlant from "../../../public/assets/aloveraPlant.svg";
import GoogleMapComponent from "./GoogleMapComponent";
import prev from "../../../public/previousBtn.svg";
import next from "../../../public/nextbtn.svg";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t= useTranslations("Index")
  return (
    <div className="flex flex-col items-center bg-[#00241C] w-full pb-10 sm:pb-56 text-white pt-28  p-5 sm:p-20 relative">
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
      <h1 className="text-3xl text-center">
        {t("CPMP")}
      </h1>
      <p className="text-xl text-center">
        {t("Your_Guide_to_Natures_Pharmacy")}
      </p>
    </div>
    <div className="pt-16 text-sm text-center z-10">
      <p>{t("Type_your_term_below_and_lets_start_this_journey_together")}</p>
    </div>

    <div className="py-10 w-[100%] z-10">
      <div className="flex rounded-t-2xl bg-black z-10 w-[90%] sm:w-[50%] mx-auto">
        <h4 className="py-1 px-2 sm:py-2 sm:px-4 md:py-3 md:px-5 bg-white rounded-tl-2xl rounded-br-none text-black text-xs sm:text-sm md:text-base">
          {t("For_Human_Use")}
        </h4>
        <h4 className="py-1 px-2 sm:py-2 sm:px-4 md:py-3 md:px-5 text-xs sm:text-sm md:text-base">
          {t("For_Animal_Use")}
        </h4>
        <h4 className="py-1 px-2 sm:py-2 sm:px-4 md:py-3 md:px-5 text-xs sm:text-sm md:text-base">
          {t("For_Plant_Use")}
        </h4>
      </div>

      {/* this is the search section  */}
      <div className="flex justify-evenly bg-white text-black p-2 sm:p-3 md:p-5 z-10 w-[100%] sm:w-[60%] mx-auto rounded-2xl">
        <div className="flex flex-col flex-1 md:pr-3">
          <select
            name="primary-term"
            id="primary-term"
            className="w-28 sm:w-36 md:w-full mb-1 sm:mb-2 text-xs sm:text-sm md:text-[12px] text-gray-400"
          >
            <option value="Primary">{t("Primary_Term")}</option>
            <option value="Primary Term">{t("Primary_Term")}</option>
            <option value="Primary Term">{t("Primary_Term")}</option>
            <option value="Primary Term">{t("Primary_Term")}</option>
          </select>
          <label className="text-xs sm:text-sm md:text-base">
            {t("Enter_the_term")}
          </label>
        </div>
        <div className="flex flex-col flex-1 md:w-56  md:pr-3">
          <select
            name="secondary-term"
            id="secondary-term"
            className="w-28 sm:w-36 md:w-full mb-1 sm:mb-2 text-xs sm:text-sm md:text-[12px] text-gray-400"
          >
            <option value="volvo">{t("Secondary_Term")}</option>
            <option value="Secondary Term">{t("Secondary_Term")}</option>
            <option value="Secondary Term">{t("Secondary_Term")}</option>
            <option value="Secondary Term">{t("Secondary_Term")}</option>
          </select>
          <label className="text-xs sm:text-sm md:text-base">
            {t("Enter_the_term")}
          </label>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <button className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-black text-white rounded text-xs sm:text-sm md:text-base">
            {t("Search")}
          </button>
        </div>
      </div>
    </div>
    <div className="relative">
      <h1 className="py-7 pb-16 z-10 text-center">
        {t("Find_Herbs_in_a_Specific_Location_Region")}
      </h1>
    </div>


    <div className="flex w-full gap-5">
      <Image src={prev} alt="prev" className="hidden sm:block" />

      <GoogleMapComponent />

      <Image src={next} alt="prev" className="hidden sm:block" />
    </div>


    <div className="flex w-full gap-5 items-center justify-center mt-10">
      <Image src={prev} alt="prev" className=" sm:hidden" />

      <button className=" border border-gray-100 px-20 py-3 rounded-lg">
        {t("Normal_Map")}
      </button>
      <Image src={next} alt="prev" className=" sm:hidden" />
    </div>

  </div>
  );
};

export default HomePage;
