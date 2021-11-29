import React, { FC } from 'react'
import Filter from '../Filter'
import { useContinents } from "../../services/api"

export type ContinentFilterProps = {
  onFilterChange: (value: string) => void
}


const ContinentFilter: FC<ContinentFilterProps> = ({ onFilterChange }) => {

  const { data } = useContinents()

  const continents = data?.continents

  const options = continents?.map(continent => ({
    value: continent.code,
    text: continent.name
  }))
  

  return (
    <Filter placeholder="Filtrar por continente" options={options} onFilter={onFilterChange} />
  )
}

export default ContinentFilter
