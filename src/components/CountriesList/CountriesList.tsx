import React, { FC } from 'react'
import CountryCard from './../CountryCard'
import { Country } from '../../interfaces'

import './countriesList.css'

export type CountriesListProps = {
  countries: Country[]
}

const CountriesList: FC<CountriesListProps> = ({ countries }) => {
  return (
    <div className="countries-list">
      {
        countries.map(country => <CountryCard key={country.name} country={country} />)
      }
    </div>
  )
}

export default CountriesList
