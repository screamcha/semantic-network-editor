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
      'background-color': 'orange',
      'label': '',
      'width': 1,
      'height': 1,
      'shape': 'ellipse',
      'overlay-opacity': 0,
      'border-opacity': 0
    }
  },
  {
    selector: '.eh-source',
    style: {
      'border-width': 2,
      'border-color': 'orange'
    }
  },
  {
    selector: '.eh-target-approve',
    style: {
      'background-color': 'green'
    }
  },
  {
    selector: '.eh-target-decline',
    style: {
      'background-color': 'red',
      'line-color': 'red',
      'target-arrow-color': 'red',
      'source-arrow-color': 'red'
    }
  },
  {
    selector: '.eh-preview, .eh-ghost-edge',
    style: {
      'line-color': 'orange',
      'target-arrow-color': 'orange',
      'source-arrow-color': 'orange'
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
    const refusedToAddEdge = sourceNode.edgesWith(targetNode).length

    const targetNodeClass = refusedToAddEdge ? 'eh-target-decline' : 'eh-target-approve'
    targetNode.addClass(targetNodeClass)
  },
  hoverout: (sourceNode, targetNode) => {
    targetNode.removeClass('eh-target-approve eh-target-decline')
    console.log(targetNode)
  }
}
