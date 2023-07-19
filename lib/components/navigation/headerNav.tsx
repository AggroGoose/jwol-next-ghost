import Link from "next/link";
import CenterNav from "./centerNav";
import RightNav from "./rightNav";
import MenuNav from "./menuNav";
import NoLeaveSociety from "@/lib/resources/svg/NoLeaveSociety";

export default function HeaderNav() {
  return (
    <div className="main-nav">
      <div className="nav-grid">
        <MenuNav />
        <button className="main-nav--logo">
          <Link href="/">
            <NoLeaveSociety />
          </Link>
        </button>
        <CenterNav />
        <RightNav />
      </div>
    </div>
  );
}
