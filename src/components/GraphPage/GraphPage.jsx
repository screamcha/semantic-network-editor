import React from "react";
import Cytoscape from "services/Cytoscape";
import Graph from "../Graph/Graph";
import { getGraphs } from "services/apollo";

// import sampleGraph from "../../sample.json";

import "./GraphPage.scss";

// cytoscape.use(edgehandles);
let cytoscape;

const App = props => {
  const drawGraph = json => {
    cytoscape.createGraphFromJSON(json);

    // this.eh = this.cy.edgehandles(edgehandlesOptions);
    // this.initEventHandlers();
  };

  React.useEffect(() => {
    // this.modalRef = $("#arrow-type-modal");
    if (!cytoscape) {
      cytoscape = new Cytoscape(document.getElementById("cy"));

      getGraphs().then(res => {
        drawGraph(res[0]);
      });
    }
  });

  // initEventHandlers = () => {
  //   this.cy.on("tap", this.handleTap);
  //   this.cy.on("ehcomplete", this.addEdge);

  //   // this.modalRef.on('hidden.bs.modal', () => {
  //   //   const { addedEdge } = this.state
  //   //   if (addedEdge) {
  //   //     this.cy.remove(addedEdge)
  //   //   }
  //   // })
  // };

  // saveGraph = () => {
  //   this.eh.hide();

  //   const data = this.cy.json();
  //   const json = cytoscapeToJSON(data);
  //   json.edgeStylesConfig = this.state.edgeStylesConfig;

  //   const now = new Date();
  //   const fileName = `semantic-network-${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.json`;
  //   const file = new File([JSON.stringify(json, null, " ")], fileName, {
  //     type: "application/json;charset=utf-8"
  //   });
  //   saveAs(file);
  // };

  // handleTap = event => {
  //   if (event.target.constructor.name === "Core") {
  //     const clickPosition = event.position;
  //     this.setState({ clickPosition, tappedElement: null });
  //   } else {
  //     this.setState({ clickPosition: null, tappedElement: event.target });
  //   }
  // };

  // addEdge = (event, sourceNode, targetNode, addedEles) => {
  //   if (sourceNode.edgesWith(targetNode).length > 1) {
  //     this.cy.remove(addedEles);
  //     targetNode.removeClass("eh-target-approve eh-target-decline");
  //   } else {
  //     this.setState({ addedEdge: addedEles[0], targetNode });
  //     this.modalRef.modal("show");
  //   }
  // };

  // addNode = node => {
  //   this.cy.add(node);
  //   this.setState({ clickPosition: null });
  // };

  // removeTappedElement = () => {
  //   const { tappedElement } = this.state;

  //   this.cy.remove(tappedElement);
  //   this.setState({ tappedElement: null });
  // };

  // handleModalSubmit = (type, isNew) => {
  //   const { addedEdge, targetNode, edgeStylesConfig } = this.state;

  //   addedEdge.data("type", type);
  //   if (isNew) {
  //     const newTypeConfig = generateEdgeStyles([type]);
  //     const newTypeStyle = configToEdgeStyles(newTypeConfig)[0];

  //     this.setState({
  //       edgeStylesConfig: [...edgeStylesConfig, ...newTypeConfig]
  //     });
  //     this.cy
  //       .style()
  //       .selector(newTypeStyle.selector)
  //       .style(newTypeStyle.style)
  //       .update();
  //   }

  //   this.modalRef.modal("hide");
  //   targetNode.removeClass("eh-target-approve eh-target-decline");
  // };

  // handleModalDecline = () => {
  //   const { addedEdge, targetNode } = this.state;

  //   this.cy.remove(addedEdge);
  //   this.modalRef.modal("hide");
  //   targetNode.removeClass("eh-target-approve eh-target-decline");
  // };

  return (
    // <React.Fragment>
    // <ArrowTypeModal
    //   edgeStyles={edgeStylesConfig}
    //   edge={addedEdge}
    //   onSubmit={this.handleModalSubmit}
    //   onDecline={this.handleModalDecline}
    // />
    // <header className="header">
    //   <div className="btn-group">
    //     <FilePicker
    //       className="btn btn-primary"
    //       onReadEnd={this.drawGraph}
    //     />
    //     <button
    //       type="button"
    //       className="btn btn-primary"
    //       onClick={this.saveGraph}
    //     >
    //       Сохранить результаты
    //     </button>
    //   </div>
    // </header>
    <div className="graph-page-container">
      <Graph />
      {/* <Dashboard
            element={tappedElement}
            coordinates={clickPosition}
            edgeStyles={edgeStylesConfig}
            addNewNode={this.addNode}
            removeElement={this.removeTappedElement}
          /> */}
    </div>
    // </React.Fragment>
  );
};

export default App;
