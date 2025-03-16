const filterOptions = document.querySelectorAll(".filter-button");

export const renderSelectedFilter = (
  thisFilterOption: HTMLButtonElement
): void => {
  filterOptions.forEach((filterOption) => {
    filterOption.classList.remove("filter-button--selected");
  });

  thisFilterOption.classList.add("filter-button--selected");
};
