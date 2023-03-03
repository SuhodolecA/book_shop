import { wrapper } from "./modules/globalVars.js";
import { createHeader } from "./modules/header.js";
import { createFooter } from "./modules/footer.js";

const fragment = document.createDocumentFragment();
fragment.append(createHeader());
fragment.append(createFooter());

wrapper.append(fragment);
