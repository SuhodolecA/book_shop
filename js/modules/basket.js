import { createElement } from "./helperFunctions.js";
import { basketItemsList } from "./globalVars.js";

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
      // event.dataTransfer.setData("id", event.currentTarget.id);
      console.log("event", event);
    });
  });

  const basket = document.querySelector(".header-basket");
  basket.addEventListener("dragover", (event) => {
    event.preventDefault();
    console.log("dragover");
    // basket.classList.add("drop-zone");
  });

  basket.addEventListener("drop", (event) => {
    event.preventDefault();
    const id = +event.dataTransfer.getData("id");
    if (basketItemsList.includes(id)) {
      return;
    } else {
      basketItemsList.push(id);
      updateBasketCounter();
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
      }
    });
  });
};

export { updateBasketCounter, addToCart };
