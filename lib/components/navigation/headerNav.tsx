import LeftNav from "./leftNav";
import UserNav from "./userNav";
import Link from "next/link";
import GradientLogo from "@/lib/resources/svg/GradientLogo";
import RightNav from "./rightNav";

export default function HeaderNav() {
  return (
    <div className="main-nav">
      <div className="nav-grid">
        <LeftNav />
        <button className="main-nav--logo">
          <Link href="/">
            <GradientLogo />
          </Link>
        </button>
        <RightNav />
        <UserNav />
      </div>
    </div>
  );
}
