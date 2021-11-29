import { CountriesList, FilterCountries } from '../../components'
import EmptyComponent from '../../components/EmptyComponent'
import Loading from '../../components/Loading'
import { useCountries } from '../../hooks/useCountries'

export type Filters = {
  continent: string
  currency: string
}

const Home = () => {
  const { loading, countries, handleFilterChange, handleSearchChange, getFilteredCountries  } = useCountries()

  if (loading) return <Loading />

  return (
    <div>
      <FilterCountries onSearchChange={handleSearchChange} onChangeFilter={handleFilterChange} />
      { countries && <CountriesList countries={getFilteredCountries()} />}
    </div>
  )
}

export default Home
