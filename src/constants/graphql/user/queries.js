import gql from "graphql-tag";
import body from "./schema";

export const GET_USER = gql`
    query {
        user {
            ${body}
        }
    }
`;
