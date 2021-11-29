import React, { FC } from 'react'
import { Form } from 'react-bootstrap'

export interface Options {
  text: string
  value: string
}

export type FilterProps = {
  options?: Options[]
  value?: string
  placeholder?: string
  onFilter: (filter: string) => void
}

const Filter: FC<FilterProps> = ({options, onFilter, placeholder}) => {

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilter(event.target.value)
  }

  const defaultMessage = "Seleccione una opción"

  return (
    <Form.Select  onChange={handleOnChange}>
      <option value="" disabled selected hidden>{ placeholder || defaultMessage }</option>
      <option value="">Todos</option>
      {options?.map((option, index) => {
        return (
          <option key={option.text + index} value={option.value}>
            {option.text}
          </option>
        )
      })}
    </Form.Select>
  )
}

export default Filter
