import Header from "/components/Header";
import Slider from "@/components/Slider";
import HeroSection from "@/components/HeroSection";
import Card from "@/components/Card";
import Reviews from "@/components/Reviews";
import List from "@/components/List";
import Stepsection from "@/components/Stepsection";


export default function Home () {
  return (
    <div>
      <Header />
      <Slider />
      <HeroSection />
      <Card />
      <Reviews />
      <List />
      <Stepsection /> {/* Correct Stepsection */}
    </div>
  );
}


