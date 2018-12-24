/* global File */
import React from 'react'
import $ from 'jquery'
import cytoscape from 'cytoscape'
import edgehandles from 'cytoscape-edgehandles'
import { saveAs } from 'file-saver'
import ArrowTypeModal from '../ArrowTypeModal'
import FilePicker from '../FilePicker'
import Dashboard from '../Dashboard'
import Graph from '../Graph'
import { JSONToCytoscape, cytoscapeToJSON, generateEdgeStyles, configToEdgeStyles } from '../../utils/parsers'
import { nodeStyle, edgeStyle, edgehandlesStyles, edgehandlesOptions } from '../../utils/options'

import './styles.css'

cytoscape.use(edgehandles)

class App extends React.PureComponent {
  state = {
    tappedElement: null,
    addedEdge: null,
    edgeStylesConfig: []
  }

  componentDidMount () {
    this.modalRef = $('#arrow-type-modal')
  }

  getCyRootRef = (element) => {
    this.cyRootRef = element
  }

  initCyEventHandlers = () => {
    this.cy.on('tap', this.selectElement)
    this.cy.on('ehcomplete', this.addEdge)
  }

  drawGraph = (json) => {
    const parsedJSON = JSONToCytoscape(json)
    const elements = parsedJSON.elements
    // window.edgeStylesConfig = parsedJSON.edgeStylesConfig
    const edgeStylesConfig = generateEdgeStyles(parsedJSON.edgeTypes, parsedJSON.edgeStylesConfig)
    this.setState({ edgeStylesConfig })

    const edgeStyles = [edgeStyle, ...configToEdgeStyles(edgeStylesConfig)]
    const layout = {
      name: 'preset'
    }

    this.cy = cytoscape({
      container: this.cyRootRef,
      elements,
      style: [
        nodeStyle,
        ...edgeStyles,
        ...edgehandlesStyles
      ],
      layout
    })

    this.eh = this.cy.edgehandles(edgehandlesOptions)
    this.initCyEventHandlers()
  }

  saveGraph = () => {
    this.eh.hide()

    const data = this.cy.json()
    const json = cytoscapeToJSON(data)
    json.edgeStylesConfig = this.state.edgeStylesConfig

    const file = new File([JSON.stringify(json, null, ' ')], 'file1.json', { type: 'application/json;charset=utf-8' })
    saveAs(file)
  }

  selectElement = ({ target: element }) => {
    this.setState({ tappedElement: element })
  }

  addEdge = (event, sourceNode, targetNode, addedEles) => {
    if (sourceNode.edgesWith(targetNode).length > 1) {
      this.cy.remove(addedEles)
    } else {
      this.setState({ addedEdge: addedEles[0] })
      this.modalRef.modal('show')
    }

    targetNode.removeClass('eh-target-approve eh-target-decline')
  }

  handleModalSubmit = (type, isNew) => {
    const { edgeStylesConfig, addedEdge } = this.state

    addedEdge.data('type', type)
    this.modalRef.modal('hide')
  }

  render () {
    const { tappedElement, edgeStylesConfig, addedEdge } = this.state

    return (
      <React.Fragment>
        <ArrowTypeModal edgeStyles={edgeStylesConfig} edge={addedEdge} onSubmit={this.handleModalSubmit} />
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
