import { records } from "./records/data.js";
import { renderHeader } from "./ui/renderHeader.js";
import { renderRecordsList } from "./ui/renderRecordsList.js";

const filterOptions = document.querySelectorAll(".filter-button");

filterOptions.forEach((filterOption) => {
  const thisFilterOption = filterOption as HTMLButtonElement;

  thisFilterOption.addEventListener("click", () => {
    if (thisFilterOption.value === "all") {
      renderRecordsList(records);
      return;
    }

    const filteredRecords = records.filter(
      (record) => record.type === thisFilterOption.value
    );

    renderRecordsList(filteredRecords);
  });
});

renderHeader();
renderRecordsList(records);
