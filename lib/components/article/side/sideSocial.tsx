import { Facebook, Instagram, Pinterest } from "@/lib/resources/svg/social";

export default function SideSocial() {
  return (
    <div className="sidebar_social">
      <a href="https://www.facebook.com">
        <Facebook />
      </a>
      <a href="https://www.instagram.com">
        <Instagram />
      </a>
      <a href="https://www.pinterest.com">
        <Pinterest />
      </a>
    </div>
  );
}
