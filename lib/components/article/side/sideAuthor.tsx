import Image from "next/image";

export default function SideAuthor() {
  return (
    <div className="article_side_author">
      <Image
        src="/images/JWLAbout.png"
        width={1435}
        height={1640}
        alt={"Styled image of the post author, Josh"}
        priority={true}
      />
      <p className="article_side_author--first">
        ADHD, millennial writer and wannabe philosopher based in Denver,
        Colorado.
      </p>
      <p>
        I like to write about mental stuff, food, and travel, but I also have a
        rotating series of seasonal interests (
        <i>
          <b>see: ADHD</b>
        </i>
        ).
      </p>
      <p>
        The things that make us different make the world colorful, and bright,
        and I think people should embrace that stuff more.{" "}
        <i>
          <b>Let's be different and make people mad.</b>
        </i>
      </p>
    </div>
  );
}
