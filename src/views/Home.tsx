import { CountriesList, FilterCountries } from '../components'
import { useCountries } from '../hooks/useCountries'

export type Filters = {
  continent: string
  currency: string
}

const Home = () => {
  const { loading, countries, handleFilterChange, handleSearchChange, getFilteredCountries  } = useCountries()

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <FilterCountries onSearchChange={handleSearchChange} onChangeFilter={handleFilterChange} />
      { countries && <CountriesList countries={getFilteredCountries()} />}
    </div>
  )
}

export default Home
