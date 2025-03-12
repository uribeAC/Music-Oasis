export const renderHeader = () => {
  const header = document.createElement("header");
  header.classList.add("main-header");

  header.innerHTML = `
    <button class="search" id="search-button" type="button">
      <span>SEARCH</span>
    </button>
    <div class="logo-container">
      <img class="logo-container__logo" src="/multimedia/icons/web-icon.svg" alt="Music Oasis logo">
      <h1>MUSIC OASIS</h1>
    </div>
    <button class="cart" id="cart-button" type="button">
      <span>CART</span>
    </button>
  `;
  document.body.prepend(header);
};
