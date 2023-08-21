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
    <div className="flex flex-col items-center w-full blmin">
      <div className="grid grid-cols-product items-center gap-y-4 bg-transparent w-full max-w-[550px] p-5 rounded-md shadow-pmd">
        <div className="col-span-2 justify-self-center w-full h-auto">
          <Image
            src={elem.image}
            width={elem.width}
            height={elem.height}
            alt={`Cover image for ${elem.title} product review.`}
          />
        </div>
        <h3 className="col-start-1 col-end-2 leading-none align-middle">
          {elem.title}
        </h3>
        {elem.ratingEnabled && (
          <div className="col-start-2 col-end-3 items-center flex pl-4">
            {rating.map((rate, i) => {
              return (
                <StarIcon
                  className={`w-5 h-5 ${
                    rate.star ? "fill-secondary" : "fill-neutral opacity-10"
                  }`}
                  key={i}
                />
              );
            })}
          </div>
        )}
        <div
          className="col-span-2 flex flex-col gap-6 text-base"
          dangerouslySetInnerHTML={{ __html: elem.description }}
        />
        {elem.buttonEnabled && (
          <a
            href={elem.buttonUrl}
            className="bg-primary text-center col-start-1 col-end-3 w-full text-sm p-4 text-base-100 rounded-md mx-auto font-bold leading-none hover:bg-secondary"
            target="_blank"
          >
            <span className="text-base-100 text-sm">{elem.buttonLabel}</span>
          </a>
        )}
      </div>
    </div>
  );
}
