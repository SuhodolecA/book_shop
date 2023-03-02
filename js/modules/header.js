import { createElement } from "./helperFunctions.js";

const createLogo = () => {
  // create logo container
  const headerLogoContainer = createElement("a");
  headerLogoContainer.classList.add("header-logo");
  headerLogoContainer.href = "index.html";

  // create logo img
  const headerLogoImg = createElement("img");
  headerLogoImg.classList.add("header-logo__img");
  headerLogoImg.src = "assets/images/header/header_logo.png";

  headerLogoContainer.append(headerLogoImg);
  return headerLogoContainer;
};

const createShoppingBasket = () => {
  // create shopping basket container
  const shoppingBasketContainer = createElement("div");
  shoppingBasketContainer.classList.add("header-basket");

  // create shopping basket icon
  const shoppingBasketImg = createElement("a");
  shoppingBasketImg.classList.add("header-basket__icon");
  shoppingBasketImg.classList.add("fas");
  shoppingBasketImg.classList.add("fa-shopping-basket");
  shoppingBasketImg.href = "#";

  // create shopping basket counter
  const shoppingBasketCounter = createElement("div");
  shoppingBasketCounter.classList.add("header-basket__counter");
  shoppingBasketCounter.textContent = "0";

  shoppingBasketContainer.append(shoppingBasketImg);
  shoppingBasketContainer.append(shoppingBasketCounter);

  return shoppingBasketContainer;
};

const createHeader = () => {
  // create header
  const header = createElement("header");
  header.classList.add("header");

  // create container
  const container = createElement("div");
  container.classList.add("container");

  // create logo
  const logo = createLogo();

  // create shopping basket
  const shoppingBasket = createShoppingBasket();

  container.append(logo);
  container.append(shoppingBasket);

  header.append(container);

  return header;
};

export { createHeader };
