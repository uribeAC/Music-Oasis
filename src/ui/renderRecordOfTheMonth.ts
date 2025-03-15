import { renderRecordCard } from "./renderRecordCard.js";
import { Record } from "../records/types";

export const renderRecordOfTheMonth = (records: Record[]): void => {
  const recordOfTheMonth = document.querySelector(
    ".record-of-the-month__card"
  ) as HTMLElement;

  records.forEach((record) => {
    if (record.isRecordOfTheMonth) {
      renderRecordCard(record, recordOfTheMonth);

      console.log(record);
    }
  });
};
