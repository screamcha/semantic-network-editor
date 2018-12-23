/* global File */
import React from 'react'
import cytoscape from 'cytoscape'
import edgehandles from 'cytoscape-edgehandles'
import { saveAs } from 'file-saver'
import FilePicker from '../FilePicker'
import Dashboard from '../Dashboard'
import Graph from '../Graph'
import { JSONToCytoscape, cytoscapeToJSON } from '../../utils/parsers'
import { nodeStyle, edgeStyles, edgehandlesStyles, edgehandlesOptions } from '../../utils/options'

import './styles.css'

cytoscape.use(edgehandles)

class App extends React.PureComponent {
  state = {
    tappedElement: null
  }

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

    this.cy.on('tap', this.selectElement)
    this.cy.on('ehcomplete', (event, sourceNode, targetNode, addedEles) => {
      if (sourceNode.edgesWith(targetNode).length > 1) {
        this.cy.remove(addedEles)
      }
      targetNode.removeClass('eh-target-approve eh-target-decline')
    })
  }

  saveGraph = () => {
    const data = this.cy.json()
    const json = cytoscapeToJSON(data)

    const file = new File([JSON.stringify(json)], 'file1.json', { type: 'application/json;charset=utf-8' })
    saveAs(file)
  }

  selectElement = ({ target: element }) => {
    this.setState({ tappedElement: element })
  }

  render () {
    const { tappedElement } = this.state

    return (
      <React.Fragment>
        <FilePicker onReadEnd={this.drawGraph} />
        <button type='button' onClick={this.saveGraph}>Save results</button>
        <div className='main-panel'>
          <Graph onSave={this.saveGraph} getRootRef={this.getCyRootRef} />
          <Dashboard element={tappedElement} />
        </div>
      </React.Fragment>
    )
  }
}

export default App
