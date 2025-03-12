export const renderHeader = () => {
  const header = document.createElement("header");
  header.classList.add("main-header");

  header.innerHTML = `
    <div class="logo-container">
      <img class="logo-container__logo" src="/multimedia/icons/web-icon.svg" alt="Music Oasis logo">
      <h1>MUSIC OASIS</h1>
    </div>
  `;
  document.body.prepend(header);
};
