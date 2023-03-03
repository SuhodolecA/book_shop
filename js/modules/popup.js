import { createElement } from "./helperFunctions.js";

const createPopupWindow = (data) => {
  // create popup container
  const popupContainer = createElement("div");
  popupContainer.classList.add("popup");

  // create popup close button
  const popupCloseBtn = createElement("button");
  popupCloseBtn.classList.add("popup-close");
  popupCloseBtn.type = "button";
  popupCloseBtn.textContent = "close";

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

export { createPopupWindow };
