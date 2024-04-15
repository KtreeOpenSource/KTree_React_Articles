// queries.js

import { gql } from 'graphql-tag'

export const GET_MY_DATA = gql`
  query GetMyData {
    getMyData {
      id
      name
      email
    }
  }
`
