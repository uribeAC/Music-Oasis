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
  const recordOriginalPrice = recordCard.querySelector(
    ".record__price--original s"
  ) as HTMLElement;

  const recordDiscountedPrice = recordCard.querySelector(
    ".record__price--discounted"
  ) as HTMLSpanElement;

  recordDiscountedPrice.textContent = `$${record.price}`;
  recordOriginalPrice.textContent = `$${record.originalPrice}`;

  if (record.price === record.originalPrice) {
    recordOriginalPrice.classList.add("record__price--hidden");
    recordDiscountedPrice.classList.remove("record__price--discounted");
  }

  recordOriginalPrice.classList.remove("record__price--hidden");
  recordDiscountedPrice.classList.add("record__price--discounted");
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
