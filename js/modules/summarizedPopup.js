import { createElement } from "./helperFunctions.js";

const popupFunctionality = () => {
  const popup = document.querySelector(".popup");
  const overlay = document.querySelector(".overlay");

  if (popup.classList.contains("hide")) {
    popup.classList.remove("hide");
    overlay.classList.remove("hide");
  } else {
    popup.classList.add("hide");
    overlay.classList.add("hide");
  }
};
const closeBtnFunctionality = () => {
  location.href = "../../index.html";
};

const createSummarizedPopup = () => {
  const popupContainer = createElement("div");
  popupContainer.classList.add("popup");
  popupContainer.classList.add("hide");

  const popupClose = createElement("button");
  popupClose.classList.add("popup-close");
  popupClose.type = "button";
  popupClose.textContent = "x";
  popupClose.addEventListener("click", closeBtnFunctionality);

  const popupMessage = createElement("p");
  popupMessage.classList.add("popup-message");
  popupMessage.innerHTML =
    "The order created. The delivery address is <span class='popup-street'>Amazing</span> street house <span class='popup-house'>3</span> flat <span class='popup-flat'>10</span>. Customer <span  class='popup-name'>John</span> <span class='popup-surname'>Gald</span>.";

  popupContainer.append(popupClose);
  popupContainer.append(popupMessage);

  return popupContainer;
};

const updatePopupInfo = (street, house, flat, name, surname) => {
  const popupStreet = document.querySelector(".popup-street");
  const popupHouse = document.querySelector(".popup-house");
  const popupFlat = document.querySelector(".popup-flat");
  const popupName = document.querySelector(".popup-name");
  const popupSurname = document.querySelector(".popup-surname");

  popupStreet.textContent = street.value;
  popupHouse.textContent = house.value;
  popupFlat.textContent = flat.value;
  popupName.textContent = name.value;
  popupSurname.textContent = surname.value;
};
export { createSummarizedPopup, updatePopupInfo, popupFunctionality };
