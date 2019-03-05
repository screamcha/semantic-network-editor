import client from "./client";
import { GET_GRAPHS } from "constants/graphql/queries";
import { UPDATE_GRAPH } from "constants/graphql/mutations";

export const getGraphs = async () => {
  try {
    const result = await client.query({
      query: GET_GRAPHS
    });

    return result.data.graph;
  } catch (error) {
    console.log("GraphQL error", error);
  }
};

export const updateGraph = async (graphId, graph) => {
  try {
    console.log(graph);
    const result = await client.mutate({
      mutation: UPDATE_GRAPH,
      variables: {
        id: graphId,
        nodes: graph.nodes,
        connections: graph.connections,
        styles: graph.styles
      }
    });

    return result;
  } catch (error) {
    console.log("GraphQL error", error);
  }
};
