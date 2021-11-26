import { gql } from '@apollo/client'

export const COUNTRIES = gql`
  query {
    countries {
      code
      name
    }
  }
`

export const COUNTINENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`

