import {
  createSummarizedPopup,
  updatePopupInfo,
  popupFunctionality,
} from "./summarizedPopup.js";
import { createOverlay } from "./overlay.js";

const wrapper = document.querySelector(".form-wrapper");
const completeBtn = document.querySelector(".complete-btn");
const form = document.querySelector(".order-form");
const formItems = form.querySelectorAll(".personal-info__item");
const nameInput = document.querySelector("#userName");
const surNameInput = document.querySelector("#surName");
const dateInput = document.querySelector("#deliveryDate");
const streetInput = document.querySelector("#deliveryStreet");
const houseInput = document.querySelector("#houseNumber");
const flatInput = document.querySelector("#flatNumber");
const giftsInput = document.querySelectorAll(".gift");

window.addEventListener("load", () => {
  const fragment = document.createDocumentFragment();
  fragment.append(createOverlay());
  fragment.append(createSummarizedPopup());
  wrapper.append(fragment);
  setMinDate();
  nameInput.addEventListener("input", nameValidation);
  nameInput.addEventListener("blur", nameValidation);
  surNameInput.addEventListener("input", nameValidation);
  surNameInput.addEventListener("blur", nameValidation);
  dateInput.addEventListener("input", dateValidation);
  dateInput.addEventListener("blur", dateValidation);
  streetInput.addEventListener("input", streetValidation);
  streetInput.addEventListener("blur", streetValidation);
  houseInput.addEventListener("input", numbersValidation);
  houseInput.addEventListener("blur", numbersValidation);
  flatInput.addEventListener("input", numbersValidation);
  flatInput.addEventListener("blur", numbersValidation);
  form.reset();

  completeBtn.addEventListener("click", completeBtnFunctionality);

  giftsInput.forEach((input) => {
    input.addEventListener("input", giftInputRestriction);
  });
});

const isValidForm = () => {
  const isValid =
    Array.from(formItems).filter((item) => item.classList.contains("valid"))
      .length === formItems.length;
  completeBtn.disabled = !isValid;
};

const nameValidation = ({ currentTarget }) => {
  const minLength = currentTarget.id === "userName" ? 3 : 4;
  const onlyString = /^[A-Za-z]+$/;
  const isOnlyString = currentTarget.value.match(onlyString);
  const isNoSpaces =
    nameInput.value.split("").filter((char) => char == " ").length === 0;
  const isCorrectLength = currentTarget.value.length > minLength;
  if (isOnlyString && isNoSpaces && isCorrectLength) {
    currentTarget.parentElement.classList.remove("invalid");
    currentTarget.parentElement.classList.add("valid");
    isValidForm();
    return true;
  } else {
    currentTarget.parentElement.classList.add("invalid");
    currentTarget.parentElement.classList.remove("valid");
    isValidForm();
    return false;
  }
};

const dateValidation = (event) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const currentDate = new Date(event.currentTarget.value).getDate();
  if (currentDate - tomorrow.getDate() < 0 || !currentDate) {
    dateInput.parentElement.classList.add("invalid");
    dateInput.parentElement.classList.remove("valid");
    isValidForm();
  } else {
    dateInput.parentElement.classList.remove("invalid");
    dateInput.parentElement.classList.add("valid");
    isValidForm();
  }
};

const setMinDate = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  dateInput.min = tomorrow.toISOString().split("T")[0];
};

const streetValidation = ({ currentTarget }) => {
  const length = +currentTarget.value.length;
  if (length > 4) {
    streetInput.parentElement.classList.remove("invalid");
    streetInput.parentElement.classList.add("valid");
    isValidForm();
    return true;
  } else {
    streetInput.parentElement.classList.add("invalid");
    streetInput.parentElement.classList.remove("valid");
    isValidForm();
    return false;
  }
};

const numbersValidation = ({ currentTarget }) => {
  const onlyNumbers = /^[0-9]+$/;
  const onlyNumbersAndDashes = /^[0-9-]+$/;
  if (currentTarget.id === "houseNumber") {
    const isOnlyNumbers = currentTarget.value.match(onlyNumbers);
    if (isOnlyNumbers) {
      currentTarget.parentElement.classList.remove("invalid");
      currentTarget.parentElement.classList.add("valid");
      isValidForm();
      return true;
    } else {
      currentTarget.parentElement.classList.add("invalid");
      currentTarget.parentElement.classList.remove("valid");
      isValidForm();
      return false;
    }
  } else {
    const isOnlyNumbersAndDashes =
      currentTarget.value.match(onlyNumbersAndDashes);
    if (isOnlyNumbersAndDashes && !currentTarget.value.startsWith("-")) {
      currentTarget.parentElement.classList.remove("invalid");
      currentTarget.parentElement.classList.add("valid");
      isValidForm();
      return true;
    } else {
      currentTarget.parentElement.classList.add("invalid");
      currentTarget.parentElement.classList.remove("valid");
      isValidForm();
      return false;
    }
  }
};

const giftInputRestriction = () => {
  const maxAmount = 2;
  const checked = Array.from(giftsInput).filter(
    (input) => input.checked
  ).length;

  if (checked === maxAmount) {
    giftsInput.forEach((input) => {
      if (!input.checked) {
        input.disabled = true;
      }
    });
  } else {
    giftsInput.forEach((input) => {
      input.disabled = false;
    });
  }
};

const completeBtnFunctionality = (event) => {
  event.preventDefault();
  updatePopupInfo(streetInput, houseInput, flatInput, nameInput, surNameInput);
  popupFunctionality();
};
