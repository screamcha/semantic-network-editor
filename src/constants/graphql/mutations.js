import gql from "graphql-tag";

const body = `
    id
    nodes {
        id
        title
        coordinates {
            x
            y
        }
    }
    connections {
        id
        source
        target
        type
    }
    styles {
        connections {
            type
            color
        }
    }
`;

export const UPDATE_GRAPH = gql`
  mutation UpdateGraph($id: ID!, $nodes: [NodeInput!]!, $connections: [ConnectionInput]!, $styles: StylesInput) {
    updateGraph(id: $id, nodes: $nodes, connections: $connections, styles: $styles) {
      ${body}
    }
  }
`;
