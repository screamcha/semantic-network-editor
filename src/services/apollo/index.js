import client from "./client";
import { GET_GRAPHS } from "constants/graphql/queries";

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
