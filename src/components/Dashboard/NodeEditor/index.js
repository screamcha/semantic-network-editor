import React, { Component } from 'react'


class NodeEditor extends Component {
  state = {
    newTitle: ''
  }
  handleInputChange = ({ target: input }) => {
    this.setState({ newTitle: input.value })
  }
  handleSubmit = () => {
    const { newTitle } = this.state
    const { element } = this.props
    const title = element.attr('title')
    const tempTitle = newTitle ? newTitle : title
    element.attr('title', tempTitle)
    this.resetModal()
  }
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
    const title = element.attr('title')
    const {newTitle} = this.state
    return (
      <div className="node-editor">
          <h1>{title}</h1> 
        <div className='form-group'>
          <input className='form-control' type='text' placeholder='Введите новое название вершины' value={newTitle} onChange={this.handleInputChange} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <button className="btn btn-success" type="submit" onClick={this.handleSubmit}>Сохранить </button>
            </div>
            <div className="col-12 col-md-6">
                <button className="btn btn-danger" type="submit" onClick={this.handleRemove}>Удалить </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NodeEditor
