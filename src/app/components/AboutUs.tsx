import React from 'react';
import { useTranslations } from 'next-intl';

const AboutUs = () => {
  const t = useTranslations("Index");

  return (
    <div className='min-h-[600px] flex flex-col items-center p-8'>
        <h1 className='text-5xl'>{t("About_Us")}</h1>
        <p className='text-2xl font-normal text-center max-w-5xl py-8'>{t("Welcome_to_the_Citizens_Portal_of_Medicinal_Plants")}</p>
   
        <button className='p-4 px-5 border-black border-2 rounded-full'>{t("Read_More")}</button>
    </div>
  );
};

export default AboutUs;
