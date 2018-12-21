import React, { Component } from 'react'

import './styles.css'

class Dashboard extends Component {
  render () {
    const { element } = this.props
    const elementType = element && element.isNode() ? 'a node' : 'an edge'

    return (
      <div className='dashboard-container'>
        {!element && <h4>Here you can find an element info</h4>}
        {!!element && (
          <h4>It's {elementType}</h4>
        )}
      </div>
    )
  }
}

export default Dashboard
