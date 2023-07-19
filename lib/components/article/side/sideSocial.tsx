import { Facebook, Instagram, Pinterest } from "@/lib/resources/svg/social";

export default function SideSocial() {
  return (
    <div className="sidebar_social">
      <a href="https://www.facebook.com/JoshWithoutLeave">
        <Facebook />
      </a>
      <a href="https://www.instagram.com/joshwithoutleave/">
        <Instagram />
      </a>
      <a href="https://www.pinterest.com/joshwithoutleave/">
        <Pinterest />
      </a>
    </div>
  );
}
