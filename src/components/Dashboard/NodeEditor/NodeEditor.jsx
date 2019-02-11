import React, { Component } from 'react'

class NodeEditor extends Component {
  state = {
    newTitle: ''
  }
  handleInputChange = ({ target: input }) => {
    this.setState({ newTitle: input.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()

    const { newTitle } = this.state
    const { element } = this.props
    const title = element.attr('title')
    const tempTitle = newTitle || title

    element.attr('title', tempTitle)
    this.setState({ newTitle: '' })
  }

  render () {
    const { element, removeElement } = this.props
    const { newTitle } = this.state
    const title = element.attr('title')

    return (
      <form className='node-editor' onSubmit={this.handleSubmit}>
        <h1>{title}</h1>
        <div className='form-group'>
          <input className='form-control' type='text' placeholder='Введите новое название вершины' value={newTitle} onChange={this.handleInputChange} />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <button className='btn btn-success' type='submit' disabled={!newTitle}>Сохранить</button>
            </div>
            <div className='col-12 col-md-6'>
              <button className='btn btn-danger' type='button' onClick={removeElement}>Удалить</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default NodeEditor
