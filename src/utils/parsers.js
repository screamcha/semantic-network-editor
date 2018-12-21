export const JSONToCytoscape = (data) => {
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
        target: conn.target
      }
    }))
  ]

  return resultElements
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
      target: edge.data.target
    }))
  }

  return result
}
