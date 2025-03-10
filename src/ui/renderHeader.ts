export const renderHeader = () => {
  const header = document.createElement("header");
  header.classList.add("header-top");

  header.innerHTML = `
    <button type="button">Caca</button>
    <img src="./multimedia/icons/web-icon.svg" alt="Music Oasis logo">
    <button type="button">Caca</button>
  `;
  document.body.prepend(header);
};
