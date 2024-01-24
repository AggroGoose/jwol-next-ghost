import JoshHeadBoba from "./SVG/joshHeadBoba";

export default function BlockCallout({ block }: { block: LexicalCallout }) {
  return (
    <div className="text-center items-center justify-center grid grid-cols-6 md:text-lg font-medium tracking-ps col-start-main col-end-main gap-4 md:grid-cols-5 md:gap-0">
      <JoshHeadBoba className="aspect-[1/2] col-span-2 w-[64px] -scale-x-100 mx-auto fill-primary-900 md:col-span-1 md:w-[75px]" />
      <div
        className="col-span-4 border-[3px] border-solid border-fcolor-base w-full px-4 py-6 rounded-lg md:col-span-4 md:px-6 md:py-8"
        dangerouslySetInnerHTML={{ __html: block.calloutText }}
      />
    </div>
  );
}
