import React, { FC } from 'react'

import './emptyComponent.css'

export type EmptyComponentProps = {
  message?: string
}

const EmptyComponent: FC<EmptyComponentProps> = ({message}) => {
  return (
    <div className='empty-component'>
      <span className='empty-component__message'>{message || "No existen registros"}</span>
    </div>
  )
}

export default EmptyComponent
