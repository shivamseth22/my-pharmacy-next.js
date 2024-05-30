import Image from "next/image";
import ScientificRefrence from "../../../public/assets/varietyImages/ScientificRefrence.svg";
import aayurvedicAushadhi from "../../../public/assets/varietyImages/aayurvedicAushadhi.svg";
import classicalReference from "../../../public/assets/varietyImages/classicalReference.svg";
import differentDisease from "../../../public/assets/varietyImages/differentDisease.svg";
import differentTratment from "../../../public/assets/varietyImages/differentTratment.svg";
import healers from "../../../public/assets/varietyImages/healers.svg";
import localPractitionars from "../../../public/assets/varietyImages/localPractitionars.svg";
import medicalPlant from "../../../public/assets/varietyImages/medicalPlant.svg";

const Variety = () => {
  const items = [
    {
      src: medicalPlant,
      alt: "Medical Plant",
      title: "Medicinal Plant",
      description: "Discover the healing power of nature’s pharmacy. Dive into our extensive database to learn about the diverse medicinal plants and their uses.",
    },
    {
      src: aayurvedicAushadhi,
      alt: "Ayurvedic Aushadhi",
      title: "Ayurvedic Aushadhi",
      description: "Unearth the secrets of Ayurveda with us. Explore our collection of Ayurvedic Aushadhi and understand their role in promoting health and wellness.",
    },
    {
      src: classicalReference,
      alt: "Classical Reference",
      title: "Classical References (Shlokas, Samhitas, etc)",
      description: "Dive into the wisdom of the ancients.",
    },
    {
      src: ScientificRefrence,
      alt: "Scientific Reference",
      title: "Modern Scientific References (Journals, Scientific Research Papers)",
      description: "Stay updated with the latest scientific discoveries on Ayurveda.",
    },
    {
      src: differentDisease,
      alt: "Different Disease",
      title: "Different Diseases",
      description: "Details on different diseases.",
    },
    {
      src: differentTratment,
      alt: "Different Treatment",
      title: "Different Kinds of Treatments",
      description: "Different kinds of treatment methods.",
    },
    {
      src: localPractitionars,
      alt: "Local Practitioners",
      title: "Local Practitioners",
      description: "Local practitioners and their details.",
    },
    {
      src: healers,
      alt: "Healers",
      title: "Healers, Healer Networks",
      description: "Healers and healer networks.",
    },
  ];

  return (
    <div className="bg-[#F0FFD5] m-0 md:m-16 rounded-3xl px-8 md:px-20 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl p-6 md:p-14">Explore the Vast Variety of Resources at CPMP!</h1>
      <div className="flex flex-wrap pb-8 md:pb-14">
        {items.map((item, index) => (
          <div key={index} className="w-full md:w-1/2 p-4">
            <Image src={item.src} alt={item.alt}/>
            <h2 className="text-lg md:text-xl font-semibold mt-4">{item.title}</h2>
            <p className="mt-2 text-[#646A69] text-sm md:text-base">{item.description}</p>
            <button className="mt-4 py-2 px-6 md:px-8 font-semibold">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Variety;
