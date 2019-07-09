import gql from "graphql-tag";

export const SIGN_UP = gql`
    mutation SignUp($username: String!, $password: String!) {
        signUp(username: $username, password: $password)
    }
`;
