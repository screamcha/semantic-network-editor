import client from "./client";
import { CREATE_USER } from "constants/graphql/user/mutations";

export const createUser = async ({ username, password }) => {
  try {
    const result = await client.mutate({
      mutation: CREATE_USER,
      variables: {
        username,
        password
      }
    });

    return result;
  } catch (error) {
    console.log("GraphQL error", error);
  }
};
