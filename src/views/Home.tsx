import React from 'react'
import { CountriesList, FilterCountries } from '../components'
import { useCountries } from './../services/api'


const Home = () => {
  const { data, loading } = useCountries()
  
  const countries = data?.countries

  const handleOnChange = () => ({})

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <FilterCountries countries={countries} onChangeFilter={handleOnChange} />
      { countries && <CountriesList countries={countries} />}
    </div>
  )
}

export default Home
