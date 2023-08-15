import Link from "next/link";
import RightNav from "./Header/rightNav";
import MenuNav from "./Header/menuNav";
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
