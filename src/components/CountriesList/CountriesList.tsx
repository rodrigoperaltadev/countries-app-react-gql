import React, { FC } from 'react'
import CountryCard from './../CountryCard'
import { Country } from '../../interfaces'

import './countriesList.css'
import { useNavigate } from 'react-router-dom'
import EmptyComponent from '../EmptyComponent'

export type CountriesListProps = {
  countries: Country[]
}

const CountriesList: FC<CountriesListProps> = ({ countries }) => {
  const navigate = useNavigate()

  const handleClick = (code: string) => {
    navigate(`/detail/${code}`)
  }

  if (!countries.length) return <EmptyComponent />

  return (
    <div className="countries-list">
      {
        countries.map(country => <CountryCard key={country.name} country={country} onClick={() => handleClick(country.code)} />)
      }
    </div>
  )
}

export default CountriesList
