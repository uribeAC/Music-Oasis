import { Record } from "../records/types";

export const renderRecordCard = (
  record: Record,
  recordCard: HTMLElement
): void => {
  const recordName = recordCard.querySelector(
    ".record__name"
  ) as HTMLHeadingElement;

  recordName.textContent = `${record.name} (${record.artist})`;
};
