import React, { Component } from 'react'
import NodeEditor from './NodeEditor'
import EdgeEditor from './EdgeEditor'
import ArrowLegend from '../ArrowLegend'
import { ID } from '../../utils/idGenerator'

import './styles.css'

class Dashboard extends Component {
  state = {
    element: this.props.element,
    event: this.props.event,
    newNodeTitle: ''
  }

  componentDidUpdate (prevProps) {
    if (this.props.element !== prevProps.element) {
      this.setState({
        element: this.props.element,
        event: this.props.event
      })
    }
  }

  resetDashboard = () => {
    this.setState({
      event: null,
      element: null,
      newNodeTitle: ''
    })
  }

  addNewNode = () => {
    const { newNodeTitle, element, event } = this.state
    const clickPosition = event.position

    element.add(
      {
        data: {
          id: ID(),
          title: newNodeTitle
        },
        position: {
          x: clickPosition.x,
          y: clickPosition.y
        }
      }
    )

    this.resetDashboard()
  }

  handleInputChange = ({ target: input }) => {
    this.setState({ newNodeTitle: input.value })
  }

  render () {
    const { edgeStyles } = this.props
    const { element, event, newNodeTitle } = this.state
    let elementType
    let clickPosition

    if (element && element.constructor.name !== 'Core') {
      elementType = element.isNode() ? 'node' : 'edge'
    } else if (element && element.constructor.name === 'Core') {
      clickPosition = event.position
    }

    return (
      <div className='dashboard-container d-flex flex-column justify-content-between'>
        <div className='editor'>
          {!elementType && !clickPosition && <h4>Here you can find an element info</h4>}
          {elementType === 'node' && <NodeEditor element={element} resetDashboard={this.resetDashboard} />}
          {elementType === 'edge' && <EdgeEditor element={element} resetDashboard={this.resetDashboard} />}
          {!elementType && clickPosition &&
          <div>
            <div className='form-group'>
              <input className='form-control' type='text' placeholder='Введите название вершины' value={newNodeTitle} onChange={this.handleInputChange} />
            </div>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <button className='btn btn-success' type='submit' onClick={this.addNewNode}>Добавить </button>
              </div>
            </div>
          </div>
          }
        </div>
        <ArrowLegend edgeStyles={edgeStyles} />
      </div>
    )
  }
}

export default Dashboard
