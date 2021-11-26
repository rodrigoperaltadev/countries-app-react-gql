import React, { FC, useEffect, useState } from "react"
import { ContinentFilter } from ".."
import { Country } from '../../interfaces'
import Filter from '../Filter'

export type FiltersCountryProps = {
  countries?: Country[]
  onChangeFilter: () => void
}

const FiltersCountry: FC<FiltersCountryProps> = ({countries}) => {

  const handleChange = (filter: string) => console.log(filter)

  const [currencies, setCurrencies] = useState<string[]>([])
  const [selectedCurrency, setSelectedCurrency] = useState<string>("")


  useEffect(() => {
    if(countries) {
      const currentCurrencies = countries.map(country => country.currency)
      setCurrencies(currentCurrencies)
    } else {
      setCurrencies([])
    }
  },[countries])

  return (
    <div>
      <ContinentFilter onFilterChange={handleChange} />
      <Filter options={currencies} value={selectedCurrency} onFilter={handleChange}/>
    </div>
  )
}

export default FiltersCountry
