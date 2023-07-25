import Image from "next/image";
import StarIcon from "./SVG/starIcon";

export default function BlockProduct({ elem }: { elem: BlockProductCard }) {
  const rating = [];
  if (elem.ratingEnabled) {
    let rateCount = Number(elem.rating) - 1;
    for (let i = 0; i < 5; i++) {
      if (i <= rateCount) {
        rating.push({ star: true, key: i });
        rateCount--;
      } else {
        rating.push({ star: false, key: i });
      }
    }
  }

  return (
    <div className="block_product">
      <div className="block_product_container">
        <div className="block_product_image">
          <Image
            src={elem.image}
            width={elem.width}
            height={elem.height}
            alt={`Cover image for ${elem.title} product review.`}
          />
        </div>
        <div className="block_product_title-container">
          <h4 className="block_product_title">{elem.title}</h4>
        </div>
        {elem.ratingEnabled && (
          <div className="block_product_rating">
            {rating.map((rate) => {
              if (rate.star) {
                return (
                  <span
                    className="block_product_rating-active block_product_rating-star"
                    key={rate.key}
                  >
                    <StarIcon />
                  </span>
                );
              } else {
                return (
                  <span className="block_product_rating-star">
                    <StarIcon />
                  </span>
                );
              }
            })}
          </div>
        )}
        <div
          className="block_product-description"
          dangerouslySetInnerHTML={{ __html: elem.description }}
        />
        {elem.buttonEnabled && (
          <a
            href={elem.buttonUrl}
            className="block_product_button block_product_btn-accent"
            target="_blank"
          >
            <span>{elem.buttonLabel}</span>
          </a>
        )}
      </div>
    </div>
  );
}
