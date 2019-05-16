import gql from "graphql-tag";
import body from "./scheme";

export const CREATE_USER = gql`
    mutation CreateUser($username: String!, $password: String!) {
        createUser(username: $username, password: $password) {
            ${body}
        }
    }
`;
