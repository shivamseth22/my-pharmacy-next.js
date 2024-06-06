
import HomePage from "./components/HomePage";
import Variety from "./components/Variety";
import OwnContentSection from "./components/OwnContentSection";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

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
