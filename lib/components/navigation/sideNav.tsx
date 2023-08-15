import NoLeaveSociety from "@/lib/resources/svg/NoLeaveSociety";
import Link from "next/link";
import NavMenu from "./Header/navMenu";

export default function SideNav() {
  return (
    <div className="side_nav">
      <div className="side_nav_top">
        <button className="side_nav--logo">
          <Link href="/">
            <NoLeaveSociety />
          </Link>
        </button>
      </div>
      <NavMenu />
    </div>
  );
}
