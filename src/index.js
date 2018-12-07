import cytoscape from 'cytoscape'

import './index.css'
console.log('qq')

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
    },
    {
      data: { id: 'd' }
    },
    {
      data: { id: 'e' }
    },
    {
      data: { id: 'f', source: 'd', target: 'e' }
    },
    {
      data: { id: 'ff', source: 'e', target: 'a' }
    },
    {
      data: { id: 'fff', source: 'd', target: 'b' }
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
