import { gql } from '@apollo/client'

export const GET_USER = gql`
query user ($id: ID) {
    user (id: $id) {
      username
      email
      areas {
        name
        description
        tabColor
        _id
      }
    }
  }
`