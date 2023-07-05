import JakosBalayLogo from "@/lib/resources/svg/JakosBalayLogo";
import CenterNav from "./centerNav";
import RightNav from "./userNav";
import Link from "next/link";

export default function HeaderNav() {
  return (
    <div className="main-nav">
      <button className="main-nav--logo">
        <Link href="/">
          <JakosBalayLogo />
        </Link>
      </button>
      <CenterNav />
      <RightNav />
    </div>
  );
}
