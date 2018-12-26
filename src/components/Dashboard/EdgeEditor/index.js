import React, { Component } from 'react'


class EdgeEditor extends Component {
  handleRemove = () => {
    const { element } = this.props
    element.cy().remove(element)
    this.resetModal()
    this.props.resetDashboard();
  }
  resetModal = () => {
    this.setState({ newTitle: '' })
  }

  render () {
    const { element } = this.props
    const type = element.attr('type')
    const sourceId = element.attr('source')
    const targetId = element.attr('target')
    const sourceTitle = element.cy().getElementById(sourceId).attr('title')
    const targetTitle = element.cy().getElementById(targetId).attr('title')
    return (
      <div className="node-editor">
      <h4><span>{sourceTitle}</span>→<span class="badge badge-secondary">{type}</span>→<span>{targetTitle}</span></h4>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
                <button className="btn btn-danger" type="submit" onClick={this.handleRemove}>Удалить </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EdgeEditor
