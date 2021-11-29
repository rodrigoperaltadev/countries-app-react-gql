import { FC } from "react"
import { Form } from "react-bootstrap"
import { ContinentFilter } from ".."
import { useFilterCountries } from "../../hooks/useFilterCountries"
import { Filters } from "../../views/Home/Home"
import Filter from '../Filter'

import './filterCountries.css'

export type FiltersCountryProps = {
  onChangeFilter: (filters: Filters) => void
  onSearchChange: (value: string) => void
}

const FiltersCountry: FC<FiltersCountryProps> = ({ onChangeFilter, onSearchChange }) => {
  
  const { filters, setFilters, currencies } = useFilterCountries()

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
    <div className="filter-countries">
      <ContinentFilter onFilterChange={handleChangeContinent} />
      <Filter placeholder="Filtrar por moneda" options={options} value={filters.currency} onFilter={handleChangeCurrency}/>
      <Form.Control type="text" placeholder="Buscar" onChange={(e) => onSearchChange(e.target.value)} />
    </div>
  )
}

export default FiltersCountry
