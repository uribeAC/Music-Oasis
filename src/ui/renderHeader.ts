export const renderHeader = () => {
  const header = document.createElement("header");
  header.classList.add("main-header");

  header.innerHTML = `
    <button class= "header-button header-button__search" type="button">
      <img class="button-image button-image__search" src="/multimedia/icons/search.svg">
      <span class="button-name">SEARCH</span>
    </button>
    <div class="logo-container">
      <img class=" logo" src="/images/icons/logo.svg" alt="Music Oasis logo">
      <span class="shop-name">MUSIC OASIS</span>
    </div>
    <button class="header-button header-button__cart" type="button">
      <img class="button-image button-image__cart" src="/multimedia/icons/cart.svg">
      <span class="button-name">CART</span>
    </button>
  `;
  document.body.prepend(header);
};
