import Link from "next/link";
import CenterNav from "./centerNav";
import RightNav from "./rightNav";
import JoshWithoutLeave from "@/lib/resources/svg/JoshWithoutLeave";

export default function HeaderNav() {
  return (
    <div className="main-nav">
      <div className="nav-grid">
        <button className="main-nav--logo">
          <Link href="/">
            <JoshWithoutLeave />
          </Link>
        </button>
        <CenterNav />
        <RightNav />
      </div>
    </div>
  );
}
