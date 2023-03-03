import { createElement } from "./helperFunctions.js";

const createFooterContent = () => {
  // create text information
  const paragraph = createElement("p");
  paragraph.classList.add("footer-text");
  paragraph.textContent = "Coded by ";

  //  create footer link
  const link = createElement("a");
  link.classList.add("footer-link");
  link.href = "https://github.com/SuhodolecA";
  link.setAttribute("target", "_blank");
  link.textContent = "Anton Sukhadolets";

  paragraph.append(link);
  return paragraph;
};

const createFooter = () => {
  // create footer
  const footer = createElement("footer");
  footer.classList.add("footer");

  //  create container
  const container = createElement("div");
  container.classList.add("container");

  // create footer content
  const footerContent = createFooterContent();

  container.append(footerContent);
  footer.append(container);

  return footer;
};

export { createFooter };
