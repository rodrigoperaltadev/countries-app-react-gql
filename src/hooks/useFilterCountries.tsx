import { useEffect, useState } from "react"
import { useCurrenciesQuery } from "../services/api"
import { Filters } from "../views/Home/Home"

export const useFilterCountries = () => {
  const [currencies, setCurrencies] = useState<string[]>([])
  const [filters, setFilters] = useState<Filters>({ continent: '', currency: '' })


  const { data, error} = useCurrenciesQuery()

  useEffect(() => {
    const getCurrencies = () => {
      if (data?.countries) {
        const uniqueCurrencies = new Set<string>()
        data?.countries.forEach(({currency}) => {
          currency && !uniqueCurrencies.has(currency) && uniqueCurrencies.add(currency)
        })
        return Array.from(uniqueCurrencies)
      }
      return []
    }
    const newCurrencies = getCurrencies()
    setCurrencies(newCurrencies)
  },[data?.countries])

  return {
    currencies,
    filters,
    error,
    setFilters,

  }
}