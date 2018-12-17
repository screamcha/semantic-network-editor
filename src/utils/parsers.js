export const JSONToCytoscape = (data) => {
  const result = {
    elements: [
      ...data.elements.map(elem => ({
        data: {
          id: elem.id
        },
        position: {
          x: elem.coordinates && elem.coordinates.x.toFixed(0),
          y: elem.coordinates && elem.coordinates.y.toFixed(0)
        }
      })),
      ...data.connections.map(conn => ({
        data: {
          id: conn.id,
          source: conn.source,
          target: conn.target
        }
      }))
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
      rows: 10
    }
  }

  return result
}

export const cytoscapeToJSON = (data) => {
  const result = {
    elements: data.elements.nodes.map(node => ({
      id: node.data.id,
      coordinates: {
        x: node.position.x,
        y: node.position.y
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
