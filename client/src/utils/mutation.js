import { gql } from '@apollo/client'

export const LOGIN = gql `
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`

export const REGISTER = gql `
  mutation addNewUser ($email: String, $username: String, $password: String) {
    register (email: $email, username: $username, password: $password) {
      token
      user {
        username
        email
        password
        _id
      }
    }
  }
`