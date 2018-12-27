import React, { Component } from 'react'
import NodeEditor from './NodeEditor'
import EdgeEditor from './EdgeEditor'
import ArrowLegend from '../ArrowLegend'
import { ID } from '../../utils/idGenerator'

import './styles.css'

class Dashboard extends Component {
  state = {
    newNodeTitle: ''
  }

  resetTitleInput = () => {
    this.setState({ newNodeTitle: '' })
  }

  addNewNode = (event) => {
    event.preventDefault()

    const { coordinates, addNewNode } = this.props
    const { newNodeTitle } = this.state

    const newNode = {
      data: {
        id: ID(),
        title: newNodeTitle
      },
      position: {
        x: coordinates.x,
        y: coordinates.y
      }
    }

    this.resetTitleInput()
    addNewNode(newNode)
  }

  handleInputChange = ({ target: input }) => {
    this.setState({ newNodeTitle: input.value })
  }

  render () {
    const { edgeStyles, element, coordinates, removeElement } = this.props
    const { newNodeTitle } = this.state
    let elementType

    if (element) {
      elementType = element.isNode() ? 'node' : 'edge'
    }

    return (
      <div className='dashboard-container d-flex flex-column justify-content-between'>
        <div className='editor'>
          {!element && !coordinates && <h4>Здесь будет отображена информация о выбранном элементе</h4>}
          {elementType === 'node' && <NodeEditor element={element} removeElement={removeElement} />}
          {elementType === 'edge' && <EdgeEditor element={element} removeElement={removeElement} />}
          {coordinates &&
          <form onSubmit={this.addNewNode}>
            <div className='form-group'>
              <input className='form-control' type='text' placeholder='Введите название вершины' value={newNodeTitle} onChange={this.handleInputChange} />
            </div>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <button className='btn btn-success' type='submit' disabled={!newNodeTitle}>Добавить</button>
              </div>
            </div>
          </form>
          }
        </div>
        <ArrowLegend edgeStyles={edgeStyles} />
      </div>
    )
  }
}

export default Dashboard
