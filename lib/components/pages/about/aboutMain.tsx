import Image from "next/image";
import AboutInitial from "./aboutInitial";
import AboutImageBlock from "./aboutImageBlock";
import AboutContinued from "./aboutContinued";

export default function AboutMain() {
  return (
    <div className="page_about_main">
      <h1>What's This No Leave Society About?</h1>
      <AboutInitial />
      <h2>My Loves: My Wife, Nature, and Good Food</h2>
      <AboutImageBlock />
      <AboutContinued />
    </div>
  );
}
