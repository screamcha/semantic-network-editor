import client from "./client";
import { SIGN_UP } from "constants/graphql/user/mutations";
import { setToken } from "utils/token";

export const signUp = async ({ username, password }) => {
  try {
    const result = await client.mutate({
      mutation: SIGN_UP,
      variables: {
        username,
        password,
      },
    });

    const token = result.data.signUp;
    setToken(token);
  } catch (error) {
    console.log("GraphQL error", error);
  }
};
