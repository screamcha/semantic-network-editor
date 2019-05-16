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

export const GET_GRAPHS = gql`
    query {
        graph {
            ${body}
        }
    }
`;
