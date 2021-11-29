import React, { FC } from 'react'

export interface Options {
  text: string
  value: string
}

export type FilterProps = {
  options?: Options[]
  value?: string
  onFilter: (filter: string) => void
}

const Filter: FC<FilterProps> = ({options, onFilter}) => {

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilter(event.target.value)
  }

  return (
    <select onChange={handleOnChange}>
      <option value="">Select a option</option>
      {options?.map((option, index) => {
        return (
          <option key={option.text + index} value={option.value}>
            {option.text}
          </option>
        )
      })}
    </select>
  )
}

export default Filter
