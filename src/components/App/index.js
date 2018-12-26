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
    clickPosition: null,
    ev: null,
    addedEdge: null,
    targetNode: null,
    edgeStylesConfig: []
  }

  componentDidMount () {
    this.modalRef = $('#arrow-type-modal')
  }

  getCyRootRef = (element) => {
    this.cyRootRef = element
  }

  initCyEventHandlers = () => {
    this.cy.on('tap', this.handleTap)
    this.cy.on('ehcomplete', this.addEdge)
  }

  drawGraph = (json) => {
    const parsedJSON = JSONToCytoscape(json)
    const elements = parsedJSON.elements
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

    const now = new Date()
    const fileName = `semantic-network-${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.json`
    const file = new File([JSON.stringify(json, null, ' ')], fileName, { type: 'application/json;charset=utf-8' })
    saveAs(file)
  }

  handleTap = (event) => {
    if (event.target.constructor.name === 'Core') {
      const clickPosition = event.position
      this.setState({ clickPosition, tappedElement: null })
    } else {
      this.setState({ clickPosition: null, tappedElement: event.target })
    }
  }

  addEdge = (event, sourceNode, targetNode, addedEles) => {
    if (sourceNode.edgesWith(targetNode).length > 1) {
      this.cy.remove(addedEles)
      targetNode.removeClass('eh-target-approve eh-target-decline')
    } else {
      this.setState({ addedEdge: addedEles[0], targetNode })
      this.modalRef.modal('show')
    }
  }

  addNode = (node) => {
    this.cy.add(node)
    this.setState({ clickPosition: null })
  }

  removeTappedElement = () => {
    const { tappedElement } = this.state

    this.cy.remove(tappedElement)
    this.setState({ tappedElement: null })
  }

  handleModalSubmit = (type, isNew) => {
    const { addedEdge, targetNode, edgeStylesConfig } = this.state

    addedEdge.data('type', type)
    if (isNew) {
      const newTypeConfig = generateEdgeStyles([type])
      const newTypeStyle = configToEdgeStyles(newTypeConfig)[0]

      this.setState({ edgeStylesConfig: [...edgeStylesConfig, ...newTypeConfig] })
      this.cy.style().selector(newTypeStyle.selector).style(newTypeStyle.style).update()
    }

    this.modalRef.modal('hide')
    targetNode.removeClass('eh-target-approve eh-target-decline')
  }

  handleModalDecline = () => {
    const { addedEdge, targetNode } = this.state

    this.cy.remove(addedEdge)
    this.modalRef.modal('hide')
    targetNode.removeClass('eh-target-approve eh-target-decline')
  }

  render () {
    const { tappedElement, clickPosition, edgeStylesConfig, addedEdge } = this.state

    return (
      <React.Fragment>
        <ArrowTypeModal
          edgeStyles={edgeStylesConfig}
          edge={addedEdge}
          onSubmit={this.handleModalSubmit}
          onDecline={this.handleModalDecline}
        />
        <header className='header'>
          <div className='btn-group'>
            <FilePicker className='btn btn-primary' onReadEnd={this.drawGraph} />
            <button type='button' className='btn btn-primary' onClick={this.saveGraph}>Сохранить результаты</button>
          </div>
        </header>
        <div className='main-panel'>
          <Graph onSave={this.saveGraph} getRootRef={this.getCyRootRef} />
          <Dashboard
            element={tappedElement}
            coordinates={clickPosition}
            edgeStyles={edgeStylesConfig}
            addNewNode={this.addNode}
            removeElement={this.removeTappedElement}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default App
