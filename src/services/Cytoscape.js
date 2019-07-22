import cytoscape from "cytoscape";
// import { JSONToCytoscape, cytoscapeToJSON } from "utils/parsers";
import { getGraph, updateGraph } from "services/apollo/graph";
import constStyles from "constants/graphStyles";

class Cytoscape {
  constructor(container) {
    this.cy = cytoscape({ container });
    this.cy.layout({
      name: "preset",
    });
  }

  setEvents(handlers) {
    const events = Object.keys(handlers);

    events.forEach(event => this.cy.on(event, handlers[event]));
  }

  // createGraphFromJSON(json) {
  //   const { elements, styles } = JSONToCytoscape(json);
  //   const _styles = [...styles, ...constStyles];

  //   this.cy.remove("");

  //   this.cy.add(elements);
  //   this.cy.style(_styles);
  // }

  // saveOnServer(graph, graphId) {
  //   if (graphId) {
  //     updateGraph(graphId, graph);
  //   }
  // }

  // save(method, options) {
  //   const data = this.cy.json();

  //   const payload = cytoscapeToJSON(data);
  //   switch (method) {
  //     case saveMethods.SERVER:
  //       return this.saveOnServer(payload, options.graphId);
  //     default:
  //       return payload;
  //   }
  // }
}

export default Cytoscape;
