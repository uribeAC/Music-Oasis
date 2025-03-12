import { Record } from "../records/types";

export const renderRecordCard = (
  record: Record,
  recordCard: HTMLElement
): void => {
  const recordCover = recordCard.querySelector(
    ".record__cover"
  ) as HTMLImageElement;

  recordCover.src = record.coverUrl;
};
