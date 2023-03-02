import { wrapper } from "./modules/globalVars.js";
import { createHeader } from "./modules/header.js";

const fragment = document.createDocumentFragment();
fragment.append(createHeader());

wrapper.append(fragment);
