import React, { FC } from 'react'
import { Country } from '../../interfaces'
import DetailRow from './DetailIRow'

import './countryDetail.css'

type CountryDetailProps = {
  country: Country
}

const CountryDetail: FC<CountryDetailProps> = ({country}) => {
  return (
    <div className='country-detail'>
      <header>
        <h2>{country.name}</h2>
      </header>
      <main>
        <DetailRow label='Codigo' value={country.code} />
        <DetailRow label='Capital' value={country.capital} />
        <DetailRow label='Moneda' value={country.currency} />
        <DetailRow label='Continente'>
          <DetailRow label='Nombre' value={country.continent.name} />
          <DetailRow label='Codigo' value={country.continent.code} />
        </DetailRow>
        <DetailRow label='Idiomas'>
          <div>
            {country.languages.map((language, index) => (
                <span>
                  {language.name} 
                  {index < country.languages.length -1 && <span> - </span>} 
                </span>
              ))
            }
          </div>
        </DetailRow>
      </main>
    </div>
  )


}

export default CountryDetail
