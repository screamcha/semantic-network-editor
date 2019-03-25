import React from "react";

import "./Dashboard.scss";

const Dashboard = props => {
  // state = {
  //   newNodeTitle: ""
  // };

  // resetTitleInput = () => {
  //   this.setState({ newNodeTitle: "" });
  // };

  // addNewNode = event => {
  //   event.preventDefault();

  //   const { coordinates, addNewNode } = this.props;
  //   const { newNodeTitle } = this.state;

  //   const newNode = {
  //     data: {
  //       id: ID(),
  //       title: newNodeTitle
  //     },
  //     position: {
  //       x: coordinates.x,
  //       y: coordinates.y
  //     }
  //   };

  //   this.resetTitleInput();
  //   addNewNode(newNode);
  // };

  // handleInputChange = ({ target: input }) => {
  //   this.setState({ newNodeTitle: input.value });
  // };

  const { edgeStyles, element, removeElement } = props;

  return (
    <div className="dashboard">
      <div className="dashboard__editor">
        {!element && <h4>Here you can see selected element</h4>}
        {element && (
          <React.Fragment>
            {element.isNode() && <h4>Node</h4>}
            {element.isEdge() && <h4>Edge</h4>}
          </React.Fragment>
        )}
        {/* {coordinates && (
          <form onSubmit={this.addNewNode}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Введите название вершины"
                value={newNodeTitle}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <button
                  className="btn btn-success"
                  type="submit"
                  disabled={!newNodeTitle}
                >
                  Добавить
                </button>
              </div>
            </div>
          </form>
        )} */}
      </div>
    </div>
  );
};

export default Dashboard;
