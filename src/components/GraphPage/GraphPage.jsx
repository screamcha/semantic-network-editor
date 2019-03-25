import React from "react";
import EditorButtonPanel from "../EditorButtonPanel/EditorButtonPanel";
import Graph from "components/Graph/Graph";
import Dashboard from "components/Dashboard/Dashboard";
import Cytoscape from "services/Cytoscape";
import { getGraphs } from "services/apollo";
import { saveMethods } from "constants/index";

// import sampleGraph from "../../sample.json";

import "./GraphPage.scss";

// cytoscape.use(edgehandles);
let cytoscape;

const GraphPage = props => {
  const [graphId, setGraphId] = React.useState(null);
  // const [clickPosition, setClickPosition] = React.useState();
  const [selectedElement, setSelectedElement] = React.useState();

  const drawGraph = json => {
    cytoscape.createGraphFromJSON(json);

    // this.eh = this.cy.edgehandles(edgehandlesOptions);
    // this.initEventHandlers();
  };

  React.useEffect(() => {
    // this.modalRef = $("#arrow-type-modal");
    if (!cytoscape) {
      cytoscape = new Cytoscape(document.getElementById("cy"));
      initEventHandlers();

      getGraphs().then(res => {
        setGraphId(res[0].id);
        drawGraph(res[0]);
      });
    }
  });

  const initEventHandlers = () => {
    cytoscape.on("select", handleTap);
    //   this.cy.on("ehcomplete", this.addEdge);

    //   // this.modalRef.on('hidden.bs.modal', () => {
    //   //   const { addedEdge } = this.state
    //   //   if (addedEdge) {
    //   //     this.cy.remove(addedEdge)
    //   //   }
    //   // })
  };

  const saveGraph = () => {
    //   this.eh.hide();
    cytoscape.save(saveMethods.SERVER, { graphId });
  };

  const handleTap = ({ target }) => {
    console.log("hi");
    setSelectedElement(target);
  };

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

  // removeselectedElement = () => {
  //   const { selectedElement } = this.state;

  //   this.cy.remove(selectedElement);
  //   this.setState({ selectedElement: null });
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
    <div className="graph-page">
      <EditorButtonPanel onSave={saveGraph} />
      <div className="graph-page__content">
        <Graph />
        <Dashboard
          element={selectedElement}
          // edgeStyles={edgeStylesConfig}
          // addNewNode={this.addNode}
          // removeElement={this.removeselectedElement}
        />
      </div>
    </div>
    // </React.Fragment>
  );
};

export default GraphPage;
