import { Record } from "../records/types";

export const renderRecordCard = (
  record: Record,
  recordCard: HTMLElement
): void => {
  const recordCover = recordCard.querySelector(
    ".record__cover"
  ) as HTMLImageElement;

  const recordName = recordCard.querySelector(
    ".record__name"
  ) as HTMLHeadingElement;

  const recordPrices = recordCard.querySelector(
    ".record__prices"
  ) as HTMLDivElement;

  if (record.price === record.originalPrice) {
    const recordPrice = document.createElement("span");

    recordPrice.classList.add("record__price");
    recordPrice.textContent = `$${record.originalPrice}`;

    recordPrices.appendChild(recordPrice);
  } else {
    const recordOriginalPrice = document.createElement("span");
    const strikethroughElement = document.createElement("s");

    recordOriginalPrice.classList.add(
      "record__price",
      "record__price--original"
    );

    strikethroughElement.textContent = `$${record.originalPrice}`;
    recordOriginalPrice.appendChild(strikethroughElement);

    const recordPrice = document.createElement("span");

    recordPrice.classList.add("record__price", "record__price--discounted");
    recordPrice.textContent = `$${record.price}`;

    recordPrices.appendChild(recordPrice);
    recordPrices.appendChild(recordOriginalPrice);
  }

  recordCover.src = record.coverUrl;
  recordName.textContent = `${record.name} (${record.artist})`;
};
