import Image from "next/image";
import ScientificRefrence from "../../../public/assets/varietyImages/ScientificRefrence.svg";
import aayurvedicAushadhi from "../../../public/assets/varietyImages/aayurvedicAushadhi.svg";
import classicalReference from "../../../public/assets/varietyImages/classicalReference.svg";
import differentDisease from "../../../public/assets/varietyImages/differentDisease.svg";
import differentTratment from "../../../public/assets/varietyImages/differentTratment.svg";
import healers from "../../../public/assets/varietyImages/healers.svg";
import localPractitionars from "../../../public/assets/varietyImages/localPractitionars.svg";
import medicalPlant from "../../../public/assets/varietyImages/medicalPlant.svg";
import { useTranslations } from "next-intl";

const Variety = () => {
  const t= useTranslations("Index")
  const items = [
  {
    src: medicalPlant,
    alt: "Medical Plant",
    title: t("Medicinal_Plant"),
    description: t("Discover_the_healing_power_of_natures_pharmacy"),
  },
  {
    src: aayurvedicAushadhi,
    alt: "Ayurvedic Aushadhi",
    title: t("Ayurvedic_Aushadhi"),
    description: t("Unearth_the_secrets_of_Ayurveda_with_us"),
  },
  {
    src: classicalReference,
    alt: "Classical Reference",
    title: t("Classical_Reference"),
    description: t("Dive_into_the_wisdom_of_the_ancients"),
  },
  {
    src: ScientificRefrence,
    alt: "Scientific Reference",
    title: t("Scientific_Reference"),
    description: t("Stay_updated_with_the_latest_scientific_discoveries_on_Ayurveda"),
  },
  {
    src: differentDisease,
    alt: "Different Disease",
    title: t("Different_Diseases"),
    description: t("Details_on_different_diseases"),
  },
  {
    src: differentTratment,
    alt: "Different Treatment",
    title: t("Different_Kinds_of_Treatments"),
    description: t("Different_kinds_of_treatment_methods"),
  },
  {
    src: localPractitionars,
    alt: "Local Practitioners",
    title: t("Local_Practitioners"),
    description: t("Local_practitioners_and_their_details"),
  },
  {
    src: healers,
    alt: "Healers",
    title: t("Healers"),
    description: t("Healers_and_healer_networks"),
  },
];

return (
  <div className="bg-[#F0FFD5] m-0 md:m-16 rounded-3xl px-8 md:px-20 flex flex-col items-center">
    <h1 className="text-3xl md:text-4xl p-6 md:p-14">{t("Explore_the_Vast_Variety_of_Resources_at_CPMP")}</h1>
    <div className="flex flex-wrap pb-8 md:pb-14">
      {items.map((item, index) => (
        <div key={index} className="w-full md:w-1/2 p-4">
          <Image src={item.src} alt={item.alt}/>
          <h2 className="text-lg md:text-xl font-semibold mt-4">{item.title}</h2>
          <p className="mt-2 text-[#646A69] text-sm md:text-base">{item.description}</p>
          <button className="mt-4 py-2  font-semibold">{t("Read_More")}</button>
        </div>
      ))}
    </div>
  </div>
);
};

export default Variety;
