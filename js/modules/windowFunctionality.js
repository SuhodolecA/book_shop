import { wrapper, setData } from "./globalVars.js";
import { createHeader } from "./header.js";
import { createMain } from "./main.js";
import { createFooter } from "./footer.js";

const windowLoadFunctionality = () => {
  window.addEventListener("load", () => {
    const fragment = document.createDocumentFragment();

    wrapper.append(fragment);

    fetch("books.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => setData(response))
      .then(() => {
        fragment.append(createHeader());
        fragment.append(createMain());
        fragment.append(createFooter());
        wrapper.append(fragment);
      });
  });
};

export { windowLoadFunctionality };