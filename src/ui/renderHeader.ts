export const renderHeader = () => {
  const header = document.createElement("header");
  header.classList.add("main-header");

  header.innerHTML = `
    <button class= "header-button header-button__search" type="button">
      <img class="button-image button-image__search" src="/images/icons/search.svg">
      <span class="button-name">search</span>
    </button>
    <div class="logo-container">
      <img class=" logo" src="/images/icons/logo.svg" alt="Music Oasis logo">
      <span class="shop-name">music oasis</span>
    </div>
    <button class="header-button header-button__cart" type="button">
      <img class="button-image button-image__cart" src="/images/icons/cart.svg">
      <span class="button-name">cart</span>
    </button>
  `;
  document.body.prepend(header);
};
