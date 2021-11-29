import { gql } from '@apollo/client'

export const COUNTRIES = gql`
  query getCountries($continent: String, $currency: String) {
    countries(filter: {
      continent: { regex: $continent }
      currency: { regex: $currency }
    }) {
      code
      name
      currency
    }
  }
`

export const CURRENCIES = gql`
  query getCurrencies {
    countries {
      currency
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

