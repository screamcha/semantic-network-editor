import gql from "graphql-tag";
import body from "./scheme";

export const GET_USER = gql`
    query {
        user {
            ${body}
        }
    }
`;
