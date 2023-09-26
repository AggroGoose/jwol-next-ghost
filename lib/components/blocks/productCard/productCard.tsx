import Image from "next/image";
import StarIcon from "./SVG/starIcon";

export default function BlockProduct({ elem }: { elem: BlockProductCard }) {
  const rating = [];
  if (elem.ratingEnabled) {
    let rateCount = Number(elem.rating) - 1;
    for (let i = 0; i < 5; i++) {
      if (i <= rateCount) {
        rating.push({ star: true, key: i });
      } else {
        rating.push({ star: false, key: i });
      }
    }
  }

  return (
    <div className="grid grid-cols-product items-center gap-y-4 w-full max-w-[550px] p-6 rounded-xl cshadow-flip hover:cshadow-lg-flip blmain md:blmin justify-self-center bg-base-tier2">
      <div className="col-span-2 justify-self-center w-full h-auto">
        <Image
          src={elem.image}
          width={elem.width}
          height={elem.height}
          alt={`Cover image for ${elem.title} product review.`}
        />
      </div>
      <h3 className="col-start-1 col-span-2 row-start-3 text-center md:text-left md:row-start-2 md:col-span-1 leading-none align-middle text-fcolor-base mt-1 -mb-1">
        {elem.title}
      </h3>
      {elem.ratingEnabled && (
        <div className="col-span-2 row-start-2 md:col-start-2 md:col-span-1 items-center flex gap-1 mx-auto">
          {rating.map((rate, i) => {
            return (
              <StarIcon
                className={`w-5 h-5 fill-base-primary ${
                  rate.star ? "opacity-100" : "opacity-30"
                }`}
                key={i}
              />
            );
          })}
        </div>
      )}
      <div
        className="col-span-2 flex flex-col gap-6 text-base text-center md:text-left"
        dangerouslySetInnerHTML={{ __html: elem.description }}
      />
      {elem.buttonEnabled && (
        <a
          href={elem.buttonUrl}
          className="bg-base-accent text-center col-start-1 col-end-3 w-full text-sm p-4 rounded-md mx-auto font-bold leading-none hover:bg-hover-accent"
          target="_blank"
        >
          <span className="text-always-light text-sm">{elem.buttonLabel}</span>
        </a>
      )}
    </div>
  );
}
