import { bandLinks } from "./band_data.js";
import { labelLinks } from "./label_data.js";
import { miscLinks } from "./misc_data.js"; 

export const links = {
  bands: [
    ...bandLinks,
    ...bandLinks,
    ...bandLinks,
    ...bandLinks,
    ...bandLinks,
    ...bandLinks,
    ...bandLinks,
    ...bandLinks,
    ...bandLinks,
    ...bandLinks,
    ...bandLinks,
    ...bandLinks,
  ],
  labels: [...labelLinks, ...labelLinks],
  misc: [...miscLinks, ...miscLinks],
};