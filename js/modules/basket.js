import { createElement } from "./helperFunctions.js";
import { dataList, basketItemsList, setBasketList } from "./globalVars.js";
import { createBooksCard } from "./booksSection.js";

const showBasketSection = () => {
  const basketSection = document.querySelector(".basket-section");
  const booksSection = document.querySelector(".books");

  basketSection.classList.remove("hide");
  booksSection.classList.add("hide");
};

const updateSum = () => {
  const totalAmount = document.querySelector(".basket-section__info-amount");
  let sum = 0;
  const booksList = document.querySelectorAll(".basket-section__item");
  console.log("booksList", booksList);
  for (let i = 0; i < booksList.length; i++) {
    const bookPriceItem = booksList[i].querySelector(
      ".basket-section__item-description__price"
    );
    const bookInput = booksList[i].querySelector(
      ".basket-section__item-counter__input"
    );
    const bookPrice = parseInt(bookPriceItem.textContent);
    const bookInputValue = bookInput.value;
    sum += bookPrice * bookInputValue;
  }

  totalAmount.textContent = `${sum}$`;
};

const removeItem = (event) => {
  const booksList = document.querySelectorAll(".basket-section__item");
  const id = +event.currentTarget.closest(".basket-section__item").id;
  console.log("id", id);
  console.log("booksList", booksList);
  booksList.forEach((item) => {
    if (item.id == id) {
      item.remove();
      setBasketList(basketItemsList.filter((item) => item != id));
      updateSum();
      updateBasketCounter();
      console.log("basketItemsList", basketItemsList);
    }
  });
};

const createBasketSectionItem = (book) => {
  // create card container
  const cardContainer = createElement("li");
  cardContainer.classList.add("basket-section__item");
  cardContainer.id = book.id;

  // create card cover section
  const cardCoverSection = createElement("div");
  cardCoverSection.classList.add("basket-section__item-cover");

  // create card img
  const cardImg = createElement("img");
  cardImg.classList.add("basket-section__item-cover__img");
  cardImg.src = book.imageLink; //  imgPath
  cardImg.alt = book.alt; // imgDesc

  cardCoverSection.append(cardImg);

  // create card description section
  const cardDescriptionSection = createElement("div");
  cardDescriptionSection.classList.add("basket-section__item-description");

  //create card description items
  const cardTitle = createElement("h4");
  cardTitle.classList.add("basket-section__item-description__title");
  cardTitle.textContent = book.title; // Title
  cardTitle.title = book.title;

  const cardAuthor = createElement("p");
  cardAuthor.classList.add("basket-section__item-description__author");
  cardAuthor.textContent = book.author; // author
  cardAuthor.title = book.author;

  const cardText = createElement("p");
  cardText.classList.add("basket-section__item-description__text");
  cardText.textContent = book.description; // description

  const cardPrice = createElement("p");
  cardPrice.classList.add("basket-section__item-description__price");
  cardPrice.textContent = `${book.price}$`; // price

  // create counter Section
  const counterSection = createElement("div");
  counterSection.classList.add("basket-section__item-counter");

  const counter = createElement("input");
  counter.classList.add("basket-section__item-counter__input");
  counter.type = "number";
  counter.value = 1;
  counter.id = "counter";
  counter.min = 0;
  counter.max = 999;
  counter.addEventListener("input", updateSum);

  counterSection.append(counter);

  // create remove button
  const removeBtn = createElement("button");
  removeBtn.classList.add("basket-section__item-btn");
  removeBtn.type = "button";
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", removeItem);

  cardDescriptionSection.append(cardTitle);
  cardDescriptionSection.append(cardAuthor);
  cardDescriptionSection.append(cardText);
  cardDescriptionSection.append(cardPrice);
  cardDescriptionSection.append(counterSection);

  cardContainer.append(cardCoverSection);
  cardContainer.append(cardDescriptionSection);
  cardContainer.append(removeBtn);

  return cardContainer;
};

const updateBasketSections = () => {
  const basketSectionList = document.querySelector(".basket-section__list");
  const booksList = basketSectionList.querySelectorAll(".basket-section__item");
  const booksListIds = Array.from(booksList).map((book) => +book.id);
  if (basketItemsList.length > 0) {
    for (let i = 0; i < basketItemsList.length; i++) {
      const cardId = basketItemsList[i];
      if (!booksListIds.includes(cardId)) {
        const bookCard = createBasketSectionItem(dataList[cardId]);
        basketSectionList.append(bookCard);
        updateSum();
      }
    }
  } else {
    return;
  }
};

const crateBasketSection = () => {
  // crate basket section container
  const crateBasketContainer = createElement("div");
  crateBasketContainer.classList.add("basket-section");
  crateBasketContainer.classList.add("hide");

  // create basket section container list
  const crateBasketContainerList = createElement("ul");
  crateBasketContainerList.classList.add("basket-section__list");

  // create basket section container total
  const crateBasketContainerInfo = createElement("div");
  crateBasketContainerInfo.classList.add("basket-section__info");

  const total = createElement("p");
  total.classList.add("basket-section__info-text");
  total.textContent = "Total: ";

  const amount = createElement("span");
  amount.classList.add("basket-section__info-amount");
  amount.textContent = "0$";

  // create confirm order button
  const confirmBtn = createElement("button");
  confirmBtn.classList.add("basket-section__info-confirm");
  confirmBtn.type = "button";
  confirmBtn.textContent = "Confirm order";

  total.append(amount);
  crateBasketContainerInfo.append(total);
  crateBasketContainerInfo.append(confirmBtn);

  crateBasketContainer.append(crateBasketContainerList);
  crateBasketContainer.append(crateBasketContainerInfo);

  return crateBasketContainer;
};

const updateBasketCounter = () => {
  const basketCounter = document.querySelector(".header-basket__counter");
  basketCounter.textContent = basketItemsList.length;
};

// drag and drop
const dragAndDropFunctionality = () => {
  const books = document.querySelectorAll(".books-item");

  books.forEach((book) => {
    book.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("id", event.currentTarget.id);
    });
  });

  const basket = document.querySelector(".header-basket");
  basket.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  basket.addEventListener("drop", (event) => {
    event.preventDefault();
    const id = +event.dataTransfer.getData("id");
    if (basketItemsList.includes(id)) {
      return;
    } else {
      basketItemsList.push(id);
      updateBasketCounter();
      updateBasketSections();
    }
  });
};

const addToCart = () => {
  const addToCartBtnsList = document.querySelectorAll(".addToCart-btn");
  dragAndDropFunctionality();
  addToCartBtnsList.forEach((btn) => {
    btn.addEventListener("click", ({ currentTarget }) => {
      const bookId = +currentTarget.closest(".books-item").id;
      if (basketItemsList.includes(bookId)) {
        console.log("includes");
        console.log("basketItemsList", basketItemsList);
        return;
      } else {
        basketItemsList.push(bookId);
        updateBasketCounter();
        updateBasketSections();
      }
    });
  });
};

export {
  updateBasketCounter,
  addToCart,
  crateBasketSection,
  updateBasketSections,
  showBasketSection,
};
