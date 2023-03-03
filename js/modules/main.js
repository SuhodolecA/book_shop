import { createElement } from "./helperFunctions.js";
import { createBooksCardList } from "./booksSection.js";

const createMain = () => {
  const booksList = createBooksCardList();
  //  create matin tag
  const main = createElement("main");
  main.classList.add("main");

  // create container
  const container = createElement("div");
  container.classList.add("container");

  container.append(booksList);
  main.append(container);

  return main;
};

export { createMain };
