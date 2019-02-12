import cytoscape from "cytoscape";
import { JSONToCytoscape } from "utils/parsers";

import constStyles from "constants/graphStyles";

class Cytoscape {
  constructor(container) {
    this.cy = cytoscape({ container });
    this.cy.layout({
      name: "preset"
    });
  }

  createGraphFromJSON(json) {
    const { elements, styles } = JSONToCytoscape(json);
    const _styles = [...styles, ...constStyles];

    this.cy.remove("");

    this.cy.add(elements);
    this.cy.style(_styles);
  }
}

export default Cytoscape;
