import { createElement } from "./helperFunctions.js";
import { createBooksCardList } from "./booksSection.js";
import { crateBasketSection } from "./basket.js";

const createMain = () => {
  const booksList = createBooksCardList();
  //  create matin tag
  const main = createElement("main");
  main.classList.add("main");

  // create container
  const container = createElement("div");
  container.classList.add("container");

  // create basket section
  const basketSection = crateBasketSection();

  container.append(booksList);
  container.append(basketSection);
  main.append(container);

  return main;
};

export { createMain };
