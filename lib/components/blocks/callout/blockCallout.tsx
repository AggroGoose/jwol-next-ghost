import JoshHeadBoba from "./SVG/joshHeadBoba";
import Astronaut from "./SVG/Astronaut";

export default function BlockCallout({ block }: { block: LexicalCallout }) {
  return (
    <figure className="block-main bg-primary-800 rounded-lg">
      <div className="flex gap-8 px-3 md:px-8">
        <div className="basis-1/3 md:basis-1/5 flex items-end">
          <Astronaut className="aspect-[1190/1135] w-full fill-always-light pt-4 md:pt-8" />
        </div>
        <div
          className="italic w-full py-6 md:py-8 basis-2/3 md:basis-4/5 self-center text-center text-always-light text-sm md:text-lg"
          dangerouslySetInnerHTML={{ __html: block.calloutText }}
        />
      </div>
    </figure>
  );
}
