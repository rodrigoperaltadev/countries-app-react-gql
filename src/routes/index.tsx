import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Detail } from '../views'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail/:code" element={<Detail />} />
    </Routes>
  )
}

export default AppRoutes