import { ApolloError } from '@apollo/client'

export interface Country {
  code: string
  name: string
  currency: string
}

export interface Countries {
  countries: Country[]
}

export interface Continent {
  code: string
  name: string
}

export interface Countinents {
  continents: Continent[]
}

export interface ResponseService <T> {
  data?: T
  loading: boolean
  error?: ApolloError
}