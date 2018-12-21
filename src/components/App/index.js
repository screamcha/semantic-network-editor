import React from 'react'
import cytoscape from 'cytoscape'
import edgehandles from 'cytoscape-edgehandles'
import { saveAs } from 'file-saver'
import FilePicker from '../FilePicker'
import Graph from '../Graph'
import { JSONToCytoscape, cytoscapeToJSON } from '../../utils/parsers'
import { nodeStyle, edgeStyles, edgehandlesStyles, edgehandlesOptions } from '../../utils/options'

import './styles.css'

cytoscape.use(edgehandles)

class App extends React.PureComponent {
  getCyRootRef = (element) => {
    this.cyRootRef = element
  }

  drawGraph = (json) => {
    const elements = JSONToCytoscape(json)
    const edgeStyle = edgeStyles[0]
    const layout = {
      name: 'preset'
    }

    this.cy = cytoscape({
      container: this.cyRootRef,
      elements,
      style: [
        nodeStyle,
        edgeStyle,
        ...edgehandlesStyles
      ],
      layout
    })

    this.eh = this.cy.edgehandles(edgehandlesOptions)
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
        <Graph onSave={this.saveGraph} getRootRef={this.getCyRootRef} />
      </React.Fragment>
    )
  }
}

export default App
