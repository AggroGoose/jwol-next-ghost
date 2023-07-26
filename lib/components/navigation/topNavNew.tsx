import Link from "next/link";
import RightNav from "./HeaderNew/rightNav";
import MenuNav from "./HeaderNew/menuNav";
import NoLeaveSociety from "@/lib/resources/svg/NoLeaveSociety";

export default function TopNav() {
  return (
    <div className="top_nav">
      <div className="nav-grid">
        <MenuNav />
        <button className="top_nav--logo">
          <Link href="/">
            <NoLeaveSociety />
          </Link>
        </button>
        <RightNav />
      </div>
    </div>
  );
}
