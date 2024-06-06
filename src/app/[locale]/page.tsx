
import HomePage from "@/app/components/HomePage";
import Variety from "@/app/components/Variety";
import OwnContentSection from "@/app/components/OwnContentSection";
import AboutUs from "@/app/components/AboutUs";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomePage/>
      <Variety/>
      <OwnContentSection/>
      <AboutUs/>
      <Footer/>
    </main>
  );
}
