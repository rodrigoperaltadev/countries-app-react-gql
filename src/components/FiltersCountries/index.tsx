import React, { FC, useEffect, useState } from "react"
import { ContinentFilter } from ".."
import { Country } from '../../interfaces'
import { useCurrenciesQuery } from "../../services/api"
import { Filters } from "../../views/Home"
import Filter from '../Filter'

export type FiltersCountryProps = {
  onChangeFilter: (filters: Filters) => void
  onSearchChange: (value: string) => void
}

const FiltersCountry: FC<FiltersCountryProps> = ({ onChangeFilter, onSearchChange }) => {
  const [currencies, setCurrencies] = useState<string[]>([])

  const { data, loading, error} = useCurrenciesQuery()

  useEffect(() => {
    const getCurrencies = () => {
      if (data?.countries) {
        const uniqueCurrencies = new Set<string>()
        data?.countries.forEach(({currency}) => {
          currency && !uniqueCurrencies.has(currency) && uniqueCurrencies.add(currency)
        })
        return Array.from(uniqueCurrencies)
      }
      return []
    }
    const newCurrencies = getCurrencies()
    setCurrencies(newCurrencies)
  },[data?.countries])
  
  const [filters, setFilters] = useState<Filters>({ continent: '', currency: '' })

  const handleChangeContinent = (continent: string) => {
    const newFilters = { ...filters, continent }
    setFilters(newFilters)
    onChangeFilter(newFilters)
  }

  const handleChangeCurrency = (currency: string) => {
    const newFilters = { ...filters, currency }
    setFilters(newFilters)
    onChangeFilter(newFilters)
  }

  const options = currencies.map(currency => ({ text: currency, value: currency }))
  
  return (
    <div>
      <ContinentFilter onFilterChange={handleChangeContinent} />
      <Filter options={options} value={filters.currency} onFilter={handleChangeCurrency}/>
      <input type="text" onChange={(e) => onSearchChange(e.target.value)} />
    </div>
  )
}

export default FiltersCountry
