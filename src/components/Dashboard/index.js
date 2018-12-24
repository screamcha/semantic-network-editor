import React, { Component } from 'react'

import './styles.css'

class Dashboard extends Component {
  render () {
    const { element } = this.props
    let elementType

    if (element && element.constructor.name !== 'Core') {
      elementType = element.isNode() ? 'a node' : 'an edge'
    }
    console.log(element)

    return (
      <div className='dashboard-container'>
        {!elementType && <h4>Here you can find an element info</h4>}
        {!!elementType && (
          <h4>It's {elementType}</h4>
        )}
      </div>
    )
  }
}

export default Dashboard
