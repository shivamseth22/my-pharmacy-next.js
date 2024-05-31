import React from "react";
import Image from "next/image";
import porpurea from "../../../public/assets/ownContentImages/purpurea.svg";
import salvia from "../../../public/assets/ownContentImages/salvia.svg";
import mentha from "../../../public/assets/ownContentImages/mentha.svg";

const OwnContentSection = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col justify-center items-center sm:justify-normal sm:items-start">
        <div className="flex flex-wrap justify-center items-center md:items-start md:justify-normal gap-5  sm:gap-32 mt-24 sm:mt-0">
          <h1 className="text-4xl mb-6 max-w-md text-center">
            Curate Your Own Content Pool!
          </h1>
          <div className="flex flex-col flex-wrap gap-5 items-start">
            <div className="flex justify-center items-center gap-5">
              <Image src={porpurea} alt="Placeholder Image 1" />
              <h2 className="text-xl font-semibold mt-4">Echinacea Purpurea</h2>
            </div>
            <div className="flex justify-center items-center gap-5">
              <Image src={salvia} alt="Placeholder Image 2" />
              <h2 className="text-xl font-semibold mt-4">Salvia Officinalis</h2>
            </div>
            <div className="flex justify-center items-center gap-5">
              <Image src={mentha} alt="Placeholder Image 3" />
              <h2 className="text-xl font-semibold mt-4">Mentha Piperita</h2>
            </div>
          </div>
        </div>
        <button className="border-black border-2 p-4 px-6 rounded-full mt-16 md:mt-0">
          Start Curating Content
        </button>
      </div>

      <div className="my-10 flex flex-col items-center  justify-center min-h-[516px]">
        <h1 className="max-w-5xl text-4xl text-center  ">
          Contribute to our knowledge pool. Upload data related to any of the
          above categories and help us grow together!
        </h1>
        <button className="bg-black p-4 py-3 mt-16 text-white rounded-full">
          Donate Knowledge and Upload Your Data
        </button>
      </div>
    </div>
  );
};

export default OwnContentSection;
