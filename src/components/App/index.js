import React from 'react'
import cytoscape from 'cytoscape'
import { saveAs } from 'file-saver'
import FilePicker from '../FilePicker'
import Graph from '../Graph'
import { JSONToCytoscape, cytoscapeToJSON } from '../../utils/parsers'

import './styles.css'

class App extends React.PureComponent {
  drawGraph = (json) => {
    const options = JSONToCytoscape(json)
    console.log(options)
    this.cy = cytoscape({
      container: document.getElementById('cy'),
      ...options
    })
  }

  saveGraph = () => {
    const data = this.cy.json()
    const json = cytoscapeToJSON(data)
    console.log(json)

    const file = new File([JSON.stringify(json)], 'file1.json', { type: 'application/json;charset=utf-8' })
    saveAs(file)
  }

  render () {
    return (
      <React.Fragment>
        <FilePicker onReadEnd={this.drawGraph} />
        <Graph onSave={this.saveGraph} />
      </React.Fragment>
    )
  }
}

export default App
