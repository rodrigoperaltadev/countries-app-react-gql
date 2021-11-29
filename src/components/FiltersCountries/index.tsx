import { FC } from "react"
import { ContinentFilter } from ".."
import { useFilterCountries } from "../../hooks/useFilterCountries"
import { Filters } from "../../views/Home"
import Filter from '../Filter'

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
    <div>
      <ContinentFilter onFilterChange={handleChangeContinent} />
      <Filter options={options} value={filters.currency} onFilter={handleChangeCurrency}/>
      <input type="text" onChange={(e) => onSearchChange(e.target.value)} />
    </div>
  )
}

export default FiltersCountry
