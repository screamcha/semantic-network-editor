import React from 'react'
import cytoscape from 'cytoscape'
import FilePicker from '../FilePicker'

import './styles.css'

class App extends React.PureComponent {
  componentDidMount () {
    this.cy = cytoscape({
      container: document.getElementById('cy'),
      elements: [
        {
          data: { id: 'a' }
        },
        {
          data: { id: 'b' }
        },
        {
          data: { id: 'ab', source: 'a', target: 'b' }
        }
      ],
      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            'label': 'data(id)'
          }
        },

        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
          }
        }
      ],
      layout: {
        name: 'grid',
        rows: 3
      }
    })
  }

  drawGraph = (json) => {
    console.log(json)
  }

  render () {
    return (
      <React.Fragment>
        <FilePicker onReadEnd={this.drawGraph} />
        <div id='cy' />
      </React.Fragment>
    )
  }
}

export default App
