import { createElement } from "./helperFunctions.js";
import { dataList } from "./globalVars.js";

const createPopupWindow = (data) => {
  // create popup container
  const popupContainer = createElement("div");
  popupContainer.classList.add("popup");
  popupContainer.classList.add("hide");

  // create popup close button
  const popupCloseBtn = createElement("button");
  popupCloseBtn.classList.add("popup-close");
  popupCloseBtn.type = "button";
  popupCloseBtn.textContent = "x";

  // create popup cover container
  const popupCoverContainer = createElement("div");
  popupCoverContainer.classList.add("popup-cover");

  // create popup cover image
  const popupImg = createElement("img");
  popupImg.classList.add("popup-cover__img");
  popupImg.src = data.imageLink;
  popupImg.alt = data.alt;

  popupCoverContainer.append(popupImg);

  // create popup description container
  const popupDescriptionContainer = createElement("div");
  popupDescriptionContainer.classList.add("popup-description");

  // create popup description content
  const popupDescriptionTitle = createElement("h3");
  popupDescriptionTitle.classList.add("popup-description__title");
  popupDescriptionTitle.textContent = data.title;

  const popupDescriptionText = createElement("p");
  popupDescriptionText.classList.add("popup-description__text");
  popupDescriptionText.textContent = data.description;

  popupDescriptionContainer.append(popupDescriptionTitle);
  popupDescriptionContainer.append(popupDescriptionText);

  popupContainer.append(popupCloseBtn);
  popupContainer.append(popupCoverContainer);
  popupContainer.append(popupDescriptionContainer);

  return popupContainer;
};

const updatePopupData = (data) => {
  const popup = document.querySelector(".popup");
  const popupImg = popup.querySelector(".popup-cover__img");
  const popupTitle = popup.querySelector(".popup-description__title");
  const popupText = popup.querySelector(".popup-description__text");
  popupImg.src = data.imageLink;
  popupImg.alt = data.alt;
  popupTitle.textContent = data.title;
  popupText.textContent = data.description;
};

const popupCloseBtnFunctionality = () => {
  const popupCloseBtn = document.querySelector(".popup-close");
  const overlay = document.querySelector(".overlay");
  const popup = document.querySelector(".popup");
  const body = document.querySelector("body");
  popupCloseBtn.addEventListener("click", () => {
    overlay.classList.add("hide");
    popup.classList.add("hide");
    body.classList.remove("stop-scroll");
  });
};

const popupFunctionality = () => {
  const showMoreBtnList = document.querySelectorAll(".showMore-btn");
  const overlay = document.querySelector(".overlay");
  const popup = document.querySelector(".popup");
  const body = document.querySelector("body");
  popupCloseBtnFunctionality();
  showMoreBtnList.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const bookId = +event.target.closest(".books-item").id;
      const data = dataList[bookId];
      overlay.classList.remove("hide");
      popup.classList.remove("hide");
      body.classList.add("stop-scroll");
      updatePopupData(data);
    });
  });
};

export { createPopupWindow, popupFunctionality };
