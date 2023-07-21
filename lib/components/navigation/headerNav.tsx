import Link from "next/link";
import CenterNav from "./Header/centerNav";
import RightNav from "./Header/rightNav";
import MenuNav from "./Header/menuNav";
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
