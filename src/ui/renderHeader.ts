export const renderHeader = () => {
  const header = document.createElement("header");
  header.classList.add("main-header");

  header.innerHTML = `
    <div class="logo-container">
      <img class="main-header__logo" src="/images/icons/logo.svg" alt="Music Oasis logo">
      <h1 class="main-header__heading">MUSIC OASIS</h1>
    </div>
  `;
  document.body.prepend(header);
};
