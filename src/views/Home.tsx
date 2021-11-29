import { useCallback, useEffect, useMemo, useState } from 'react'
import { CountriesList, FilterCountries } from '../components'
import { useCountries } from '../hooks/useCountries'
import { useCountriesQuery } from '../services/api'

export type Filters = {
  continent: string
  currency: string
}

const Home = () => {
  const { data, loading, error, refetch: fetchCountries } = useCountriesQuery()
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

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <FilterCountries onSearchChange={handleSearchChange} onChangeFilter={handleFilterChange} />
      { countries && <CountriesList countries={getFilteredCountries()} />}
    </div>
  )
}

export default Home
