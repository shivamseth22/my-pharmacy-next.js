import Image from "next/image";
import React from "react";
import ig from "../../../public/assets/footerIcon/ig.svg";
import facebook from "../../../public/assets/footerIcon/facebook.svg";
import linkedIn from "../../../public/assets/footerIcon/linkedIn.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-[#022C22] w-full text-white h-[550px] flex flex-col justify-center items-center sm:px-20 py-32">
        <div className="flex flex-wrap justify-around items-center gap-0 sm:gap-20 sm:mr-10 w-full">
          <div>
            <ul className="p-5">
              <li className="p-4">About Us</li>
              <li className="p-4">Database</li>
              <li className="p-4">Upload Your Data</li>
              <li className="p-4">Create the Data</li>
            </ul>
          </div>
          <div className="sm:ml-10 mb-5">
            <ul>


                <li className=" flex justify-center items-center gap-5 p-2 bg-white/[0.1] m-2 rounded-full px-5">
                <Image src={facebook} alt="ig" />
                  Follow Us On Facebook
                </li>




                <li className=" flex justify-center items-center gap-5 p-2 bg-white/[0.1] m-2 rounded-full px-5">
                <Image src={ig} alt="ig" />
                Follow Us On Instagram
              </li>


              <li className=" flex justify-center items-center gap-5 p-2 bg-white/[0.1] m-2 rounded-full px-5">
                <Image src={linkedIn} alt="ig" />
                Follow Us On LinkedIn
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="flex justify-center sm:justify-end px-5 sm:px-20 bg-[#022C22] p-2 w-full text-white">
        © 2024 CPMP. All rights reserved
      </p>
    </>
  );
};

export default Footer;
