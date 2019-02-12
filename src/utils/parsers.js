export const JSONToCytoscape = data => {
  let edgeTypes = new Set();
  const elements = [
    ...data.nodes.map(elem => ({
      group: "nodes",
      data: {
        id: elem.id,
        title: elem.title
      },
      position: {
        x: elem.coordinates && Number(elem.coordinates.x),
        y: elem.coordinates && Number(elem.coordinates.y)
      }
    })),
    ...data.connections.map(conn => {
      edgeTypes.add(conn.type);
      return {
        group: "edges",
        data: {
          id: conn.id,
          source: conn.source,
          target: conn.target,
          type: conn.type
        }
      };
    })
  ];
  edgeTypes = Array.from(edgeTypes);

  const edgeStyles = data.styles.connections;

  const edgeTypesWithStyles = edgeStyles.map(style => style.type);
  const edgeTypesWithoutStyles = edgeTypes.filter(
    type => !edgeTypesWithStyles.includes(type)
  );

  edgeTypesWithoutStyles.forEach(type => {
    const geheratedStyles = generateEdgeStyles(type);
    edgeStyles.push(geheratedStyles);
  });

  const styles = getCytpscapeEdgeStyles(edgeStyles);

  return {
    elements,
    styles
  };
};

// export const cytoscapeToJSON = data => {
//   const result = {
//     elements: data.elements.nodes.map(node => ({
//       id: node.data.id,
//       title: node.data.title,
//       coordinates: {
//         x: +node.position.x.toFixed(0),
//         y: +node.position.y.toFixed(0)
//       }
//     })),
//     connections: data.elements.edges.map(edge => ({
//       id: edge.data.id,
//       source: edge.data.source,
//       target: edge.data.target,
//       type: edge.data.type
//     }))
//   };

//   return result;
// };

export const generateEdgeStyles = type => ({
  type,
  color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  arrowShape: "triangle"
});

export const getCytpscapeEdgeStyles = config => {
  const result = config.map(style => {
    return {
      selector: `edge[type="${style.type}"]`,
      style: {
        "line-color": style.color,
        "target-arrow-shape": style.arrowShape,
        "target-arrow-color": style.color
      }
    };
  });

  return result;
};
