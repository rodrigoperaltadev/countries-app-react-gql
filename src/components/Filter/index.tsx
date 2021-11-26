import React, { FC } from 'react'

export type FilterProps = {
  options?: string[]
  value?: string
  onFilter: (filter: string) => void
}

const Filter: FC<FilterProps> = ({options, onFilter}) => {

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilter(event.target.value)
  }

  return (
    <select onChange={handleOnChange}>
      {options?.map(option => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        )
      })}
    </select>
  )
}

export default Filter
