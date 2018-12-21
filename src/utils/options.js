export const nodeStyle = {
  selector: 'node',
  style: {
    'width': 'label',
    'height': 'label',
    'padding': '10px',
    'label': 'data(id)',
    'color': '#fff',
    'text-valign': 'center',
    'background-color': '#666'
  }
}

export const edgeStyles = [
  {
    selector: 'edge',
    style: {
      'width': 3,
      'curve-style': 'straight',
      'target-arrow-shape': 'triangle'
    }
  }
]

export const edgehandlesStyles = [
  {
    selector: '.eh-handle',
    style: {
      'background-color': 'red',
      'label': '',
      'width': 1,
      'shape': 'ellipse',
      'overlay-opacity': 0,
      'border-opacity': 0
    }
  },
  {
    selector: '.eh-hover',
    style: {
      'background-color': 'red'
    }
  },
  {
    selector: '.eh-source',
    style: {
      'border-width': 2,
      'border-color': 'red'
    }
  },
  {
    selector: '.eh-target',
    style: {
      'border-width': 2,
      'border-color': 'red'
    }
  },
  {
    selector: '.eh-preview, .eh-ghost-edge',
    style: {
      'background-color': 'red',
      'line-color': 'red',
      'target-arrow-color': 'red',
      'source-arrow-color': 'red'
    }
  },
  {
    selector: '.eh-ghost-edge.eh-preview-active',
    style: {
      'opacity': 0
    }
  }
]

export const edgehandlesOptions = {
  hoverover: (sourceNode, targetNode) => {
    console.log(targetNode)
  }
}
