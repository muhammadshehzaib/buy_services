import Header from "../../components/Header";
import Slider from "../../components/Slider";
import Tabsec from "../../components/tabbs/Tabsec"; // Importing the tabsecs component

export default function Subscribers() {
  return (
    <div>
      <Header />
      <Slider />
      <div>
        <Tabsec /> {/* Using the tabsecs component */}
      </div>
    </div>
  );
}
