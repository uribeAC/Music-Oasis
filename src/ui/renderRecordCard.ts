import { Record } from "../records/types";

const renderCover = (record: Record, recordCard: HTMLElement): void => {
  const recordCover = recordCard.querySelector(
    ".record__cover"
  ) as HTMLImageElement;

  recordCover.src = record.coverUrl;
};

const renderName = (record: Record, recordCard: HTMLElement): void => {
  const recordName = recordCard.querySelector(
    ".record__name"
  ) as HTMLHeadingElement;

  recordName.textContent = `${record.name} (${record.artist})`;
};

const renderPrices = (record: Record, recordCard: HTMLElement): void => {
  const recordPrices = recordCard.querySelector(
    ".record__prices"
  ) as HTMLDivElement;

  if (record.price !== record.originalPrice) {
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

    return;
  }

  const recordPrice = document.createElement("span");

  recordPrice.classList.add("record__price");
  recordPrice.textContent = `$${record.originalPrice}`;

  recordPrices.appendChild(recordPrice);
};

const renderDiscount = (record: Record, recordCard: HTMLElement): void => {
  const recordTags = recordCard.querySelector(
    ".record__tags"
  ) as HTMLDivElement;

  if (record.price !== record.originalPrice) {
    const recordTag = document.createElement("span");
    recordTag.classList.add("record__tag--discount");

    recordTags.prepend(recordTag);
  }
};

export const renderRecordCard = (
  record: Record,
  recordCard: HTMLElement
): void => {
  renderCover(record, recordCard);
  renderName(record, recordCard);
  renderPrices(record, recordCard);
  renderDiscount(record, recordCard);
};
