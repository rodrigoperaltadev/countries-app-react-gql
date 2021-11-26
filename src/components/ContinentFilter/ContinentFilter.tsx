import React, { FC } from 'react'
import Filter from '../Filter'
import { useContinents } from "../../services/api"

export type ContinentFilterProps = {
  onFilterChange: (value: string) => void
}


const ContinentFilter: FC<ContinentFilterProps> = ({ onFilterChange }) => {

  const { data, loading, error } = useContinents()

  const continents = data?.continents.map(continent => continent.name)


  return (
    <Filter options={continents} onFilter={onFilterChange} />
  )
}

export default ContinentFilter
