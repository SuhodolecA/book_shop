import { dataList } from "./globalVars.js";
import { createElement } from "./helperFunctions.js";

const showBookSection = (e) => {
  e.preventDefault();
  const basketSection = document.querySelector(".basket-section");
  const booksSection = document.querySelector(".books");

  basketSection.classList.add("hide");
  booksSection.classList.remove("hide");
};

const createBooksCard = (data) => {
  // create card container
  const cardContainer = createElement("li");
  cardContainer.classList.add("books-item");
  cardContainer.id = data.id;
  cardContainer.draggable = true;

  // create card cover section
  const cardCoverSection = createElement("div");
  cardCoverSection.classList.add("books-item__cover");

  // create card img
  const cardImg = createElement("img");
  cardImg.classList.add("books-item__cover-img");
  cardImg.src = data.imageLink; //  imgPath
  cardImg.alt = data.alt; // imgDesc

  cardCoverSection.append(cardImg);

  // create card description section
  const cardDescriptionSection = createElement("div");
  cardDescriptionSection.classList.add("books-item__description");

  //create card description items
  const cardTitle = createElement("h4");
  cardTitle.classList.add("books-item__description-title");
  cardTitle.textContent = data.title; // Title
  cardTitle.title = data.title;

  const cardAuthor = createElement("p");
  cardAuthor.classList.add("books-item__description-author");
  cardAuthor.textContent = data.author; // author
  cardAuthor.title = data.author;

  const cardPrice = createElement("p");
  cardPrice.classList.add("books-item__description-price");
  cardPrice.textContent = `${data.price}$`; // price

  cardDescriptionSection.append(cardTitle);
  cardDescriptionSection.append(cardAuthor);
  cardDescriptionSection.append(cardPrice);

  // create card controls section
  const cardControlsSection = createElement("div");
  cardControlsSection.classList.add("books-item__controls");

  // create card show more button
  const showMoreBtn = createElement("button");
  showMoreBtn.classList.add("books-item__controls-btn");
  showMoreBtn.classList.add("showMore-btn");
  showMoreBtn.type = "button";
  showMoreBtn.textContent = "Show more";

  // create card add to cart button
  const addToCartBtn = createElement("button");
  addToCartBtn.classList.add("books-item__controls-btn");
  addToCartBtn.classList.add("addToCart-btn");
  addToCartBtn.type = "button";
  addToCartBtn.textContent = "Add to cart";

  cardControlsSection.append(showMoreBtn);
  cardControlsSection.append(addToCartBtn);

  cardContainer.append(cardCoverSection);
  cardContainer.append(cardDescriptionSection);
  cardContainer.append(cardControlsSection);

  return cardContainer;
};

const createBooksCardList = () => {
  const cardsContainer = createElement("ul");
  cardsContainer.classList.add("books");

  for (let i = 0; i < dataList.length; i++) {
    const data = dataList[i];
    const bookCard = createBooksCard(data);
    cardsContainer.append(bookCard);
  }

  return cardsContainer;
};

export { createBooksCard, createBooksCardList, showBookSection };
