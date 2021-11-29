import React, { FC } from 'react'

import './detailRow.css'

export type DetailRowProps = {
  label: string
  value?: string
  children?: JSX.Element | JSX.Element[]
}

const DetailRow: FC<DetailRowProps> = ({ label, value, children }) => {
  return (
    <div className='detail-row'>
      <label>{ label }</label>
      { value && <span>{ value }</span>}
      { children }
    </div>
  )
}

export default DetailRow
