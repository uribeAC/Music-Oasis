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

  recordCover.src = record.coverUrl;
  recordName.textContent = `${record.name} (${record.artist})`;
};
