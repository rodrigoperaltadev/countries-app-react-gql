import { useCallback, useMemo, useState } from "react";
import { useCountriesQuery } from '../services/api'
import { Filters } from "../views/Home";

export const useCountries = () => {
  const { data, loading, refetch: fetchCountries } = useCountriesQuery()
  const [search, setSearch] = useState<string>('')

  const countries = useMemo(() => data?.countries || [], [data])


  const getCountries = async (filters: Filters) => {
    await fetchCountries(filters)
  }
  const handleFilterChange = (filters: Filters) => {
    getCountries({
      continent: filters.continent,
      currency: filters.currency
    })
  }

  const handleSearchChange = (search: string) => {
    console.log(search)
    search.length > 1 ? setSearch(search) : setSearch('')
  }

  const getFilteredCountries = useCallback(() => {
    return countries.filter(country => {
      return country.name.toLowerCase().includes(search.toLowerCase())
    })
  },[countries, search])

  return {
    countries,
    loading,
    handleFilterChange,
    handleSearchChange,
    getFilteredCountries
  }

}
