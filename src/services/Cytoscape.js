import cytoscape from "cytoscape";
import { JSONToCytoscape, cytoscapeToJSON } from "utils/parsers";
import { updateGraph } from "services/apollo";
import { saveMethods } from "constants/index";
import constStyles from "constants/graphStyles";

class Cytoscape {
  constructor(container) {
    this.cy = cytoscape({ container });
    this.cy.layout({
      name: "preset"
    });
  }

  on(event, handler) {
    this.cy.on(event, handler);
  }

  createGraphFromJSON(json) {
    const { elements, styles } = JSONToCytoscape(json);
    const _styles = [...styles, ...constStyles];

    this.cy.remove("");

    this.cy.add(elements);
    this.cy.style(_styles);
  }

  saveOnServer(graph, graphId) {
    if (graphId) {
      updateGraph(graphId, graph);
    }
  }

  save(method, options) {
    const data = this.cy.json();

    const payload = cytoscapeToJSON(data);
    switch (method) {
      case saveMethods.SERVER:
        return this.saveOnServer(payload, options.graphId);
      default:
        return payload;
    }
  }
}

export default Cytoscape;
