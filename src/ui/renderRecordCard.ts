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
    recordOriginalPrice.classList.add("hidden");
    recordDiscountedPrice.classList.remove("record__price--discounted");
  }

  recordOriginalPrice.classList.remove("hidden");
  recordDiscountedPrice.classList.add("record__price--discounted");
};

const renderDiscount = (record: Record, recordCard: HTMLElement): void => {
  const recordDiscountTag = recordCard.querySelector(
    ".record__tag--discount"
  ) as HTMLDivElement;

  if (record.price !== record.originalPrice) {
    recordDiscountTag.classList.add("hidden");
  }
};

const renderType = (record: Record, recordCard: HTMLElement): void => {
  const recordType = recordCard.querySelector(
    ".record__tag--type"
  ) as HTMLSpanElement;
  recordType.textContent = record.type;
};

export const renderRecordCard = (
  record: Record,
  recordCard: HTMLElement
): void => {
  renderCover(record, recordCard);
  renderName(record, recordCard);
  renderPrices(record, recordCard);

  if (record.isRecordOfTheMonth) {
    return;
  }

  renderDiscount(record, recordCard);
  renderType(record, recordCard);
};
