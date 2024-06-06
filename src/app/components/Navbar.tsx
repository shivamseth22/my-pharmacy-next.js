"use client";
import Image from "next/image";

import React, { useState } from "react";
import hamburgIcon from "../../../public/hamburgIcon.svg";
import leaf from "../../../public/leaf.svg";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const t = useTranslations("Index");
  const router = useRouter();
  const pathname = usePathname();
  const route = pathname;
  const routeWithoutSlash = route.slice(1); // This removes the leading slash
  console.log(routeWithoutSlash);

  const [selectedLang, setSelectedLang] = useState(routeWithoutSlash); // Default to English

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setSelectedLang(lang);

    // Redirect to the route based on the selected language
    if (lang === "en") {
      router.push("/en");
    } else if (lang === "hi") {
      router.push("/hi");
    } else if (lang === "gu") {
      router.push("/gu");
    } else if (lang === "ta") {
      router.push("/ta");
    } else if (lang === "kn") {
      router.push("/kn");
    }
    // Add more conditions for other languages if needed
  };

  return (
    <div className="bg-[#00241C] text-white relative">
      <div className="absolute top-5 left-5">
        <Image src={leaf} alt="hamburg" width={50} height={50} />
      </div>

      <nav className="sm:flex justify-between items-center p-2 sm:p-5 px-5 sm:px-10 pl-20 hidden">
        <ul className="flex gap-10 justify-center items-center">
          <h1 className="text-xl sm:ml-10 mr-10 sm:mr-10">{t("CPMP")}</h1>
          <li className="bg-black py-2 px-4 rounded-lg">{t("Home")}</li>
          <li>{t("Explore_and_Search")}</li>
          <li>{t("Curate")}</li>
          <li>{t("Upload_Your_Data")}</li>
          <li>{t("Contact_Us")}</li>
        </ul>
        <button className="border-2 p-2 px-5 rounded-full">
          {t("My_Account")}
        </button>
        <select
          className="border-2 p-2 rounded-md text-black ml-5"
          value={selectedLang}
          onChange={handleLangChange}
        >
          <option value="en">English</option>

          <option value="hi">हिन्दी</option>
          <option value="gu">Gujarati</option>
          <option value="ta">Tamil</option>
          <option value="kn">Kannad</option>
          {/* Add more languages as needed */}
        </select>
      </nav>

      <nav className="flex justify-between items-center p-5 px-10 pl-20 sm:hidden">
        <ul className="flex gap-10 justify-center items-center">
          <h1 className="text-xl">{t("CPMP")}</h1>
        </ul>
        <div className="flex justify-center items-center gap-5">
          <button className="border-2 p-2 px-2 sm:px-5  rounded-full">
            {t("My_Account")}
          </button>
          <div className="">
            <Image src={hamburgIcon} alt="hamburg" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
