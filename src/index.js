const cytoscape = require('cytoscape')

const cy = cytoscape({
  container: document.getElementById('cy'),
  elements: [
    {
      data: { id: 'a' }
    },
    {
      data: { id: 'b' }
    },
    {
      data: { id: 'c', source: 'a', target: 'b' }
    }
  ],
  style: [
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
    rows: 1
  }
})
