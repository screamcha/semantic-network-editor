export const JSONToCytoscape = (data) => {
  const edgeTypes = new Set()
  const resultElements = [
    ...data.elements.map(elem => ({
      data: {
        id: elem.id
      },
      position: {
        x: elem.coordinates && +elem.coordinates.x,
        y: elem.coordinates && +elem.coordinates.y
      }
    })),
    ...data.connections.map(conn => ({
      data: {
        id: conn.id,
        source: conn.source,
        target: conn.target,
        type: conn.type
      }
    }))
  ]
  const edgeStylesConfig = data.edgeStylesConfig
    ? data.edgeStylesConfig.map(style => ({
      type: style.type,
      color: style.color,
      arrowShape: style.arrowShape
    })) : []

  resultElements.forEach((element) => {
    if (element.data.type) {
      edgeTypes.add(element.data.type)
    }
  })

  return {
    elements: resultElements,
    edgeStylesConfig,
    edgeTypes: [...edgeTypes]
  }
}

export const cytoscapeToJSON = (data) => {
  const result = {
    elements: data.elements.nodes.map(node => ({
      id: node.data.id,
      coordinates: {
        x: +node.position.x.toFixed(0),
        y: +node.position.y.toFixed(0)
      }
    })),
    connections: data.elements.edges.map(edge => ({
      id: edge.data.id,
      source: edge.data.source,
      target: edge.data.target,
      type: edge.data.type
    }))
  }

  return result
}

export const generateEdgeStyles = (edgeTypes, edgeStylesConfig) => {
  const config = [ ...edgeStylesConfig ]
  if (edgeTypes) {
    edgeTypes.forEach(type => {
      let isTypePresent = ~config.findIndex(el => {
        return el.type === type
      })
      if (!isTypePresent) {
        config.push(
          {
            type,
            'color': `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            'arrowShape': 'triangle'
          }
        )
      }
    })
  }

  return config
}

export const configToEdgeStyles = (config) => {
  const result = config.map(style => {
    return {
      selector: `edge[type="${style.type}"]`,
      style: {
        'line-color': style.color,
        'target-arrow-shape': style.arrowShape,
        'target-arrow-color': style.color
      }
    }
  })

  return result
}
