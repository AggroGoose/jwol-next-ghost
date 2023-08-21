import JoshHeadBoba from "./SVG/joshHeadBoba";

export default function BlockCallout({ elem }: { elem: BlockCalloutCard }) {
  return (
    <div className="text-center items-center justify-center grid grid-cols-5 text-lg font-medium tracking-ps col-start-main col-end-main">
      <JoshHeadBoba className="aspect-[1/2] col-span-1 w-[75px] -scale-x-100 mx-auto fill-neutral" />
      <div
        className="col-span-4 border-[3px] border-solid border-neutral w-full px-6 py-8 rounded-lg"
        dangerouslySetInnerHTML={{ __html: elem.content }}
      />
    </div>
  );
}
