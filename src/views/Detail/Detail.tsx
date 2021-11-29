import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import CountryDetail from '../../components/CountryDetail'
import Loading from '../../components/Loading'
import { useCountryQuery } from '../../services/api/countries'

import './detail.css'


const Detail = () => {
  const { code: id } = useParams()
  const { data, loading } = useCountryQuery(id)
  const navigate = useNavigate()

  const country = data?.country

  const handleBackButtonOnClick = () => {
    navigate('/')
  }

  if (loading) return <Loading />
  if (!country) return <div>Not found</div>

  return (
    <div className='detail-view'>
      <Button variant='primary' onClick={handleBackButtonOnClick}>Regresar</Button>
      <CountryDetail country={country} />
    </div>
  )
}

export default Detail