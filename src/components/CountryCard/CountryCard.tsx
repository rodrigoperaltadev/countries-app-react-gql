import React, { FC } from 'react'
import { Country } from '../../interfaces'

import './countryCard.css'

export type CountryCardProps = {
  country: Country
}

const CountryCard: FC<CountryCardProps> = ({ country }) => {
  return (
    <div className='country-card'>
      <span className='country-card__code'>{country.code}</span>
      <span className='country-card__name'>{country.name}</span>
    </div>
  )
}

export default CountryCard
