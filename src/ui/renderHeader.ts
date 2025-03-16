export const renderHeader = () => {
  const header = document.createElement("header");
  header.classList.add("main-header");

  header.innerHTML = `
    <button class= "header-button header-button__search" type="button" aria-label="search">
      <img class="button-image button-image__search" src="/images/icons/search.svg" alt="red lens icon" aria-hidden:"true">
      <span class="button-name" aria-hidden:"true">search</span>
    </button>
    <div class="logo-container">
      <img class=" logo" src="/images/icons/logo.svg" alt="Music Oasis logo">
      <span class="shop-name">music oasis</span>
    </div>
    <button class="header-button header-button__cart" type="button" aria-label="go to your cart">
      <img class="button-image button-image__cart" src="/images/icons/cart.svg" alt="red shopping cart icon" aria-hidden:"true">
      <span class="button-name" aria-hidden:"true">cart</span>
    </button>
  `;
  document.body.prepend(header);
};
