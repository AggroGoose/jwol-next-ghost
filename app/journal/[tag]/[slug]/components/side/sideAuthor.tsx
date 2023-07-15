import Image from "next/image";

export default function SideAuthor() {
  return (
    <div className="article_side_author">
      <Image
        src="/images/JWLAbout.png"
        width={1435}
        height={1640}
        alt={"Styled image of the post author, Josh"}
      />
      <p>
        He's just a poor boy from a poor family, spare him his life from this
        monstrosity. Easy come, easy go, will you let me go? Bismillah! No, we
        will not let you go.
      </p>
    </div>
  );
}
