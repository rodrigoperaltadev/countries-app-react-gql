import { ApolloError, ApolloQueryResult, LazyQueryResult, OperationVariables } from '@apollo/client'

export interface Country {
  code: string
  name: string
  currency: string
  continent: Continent
  languages: Language[]
  capital: string
}

export interface Language {
  code: string
  name: string
  native: string
  rtl: boolean
}

export interface Countries {
  countries: Country[]
}

export interface Continent {
  code: string
  name: string
}

export interface Currencies {
  countries: Extract<Country, { currency: string }>[]
}

export interface Countinents {
  continents: Continent[]
}

export interface ResponseLazyService <T,V> {
  data?: T
  loading: boolean
  error?: ApolloError
  refetch: (variables?: Partial<OperationVariables>) => Promise<LazyQueryResult<T,V>>
}
export interface ResponseService <T> {
  data?: T
  loading: boolean
  error?: ApolloError
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<T>>
}