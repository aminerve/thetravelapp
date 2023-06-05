import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function SingleCountry() {
  const [country, setCountry] = useState([])
  const {name} = useParams()
  useEffect(() => {
  const fetchSingleCountry = async() = {
      try {
        const res = await fetch(``)
        const data = res.json()
        setCountry(data)
      } catch (error) {
        console.error(error)
      }
    },[name])
  return (
    <div>SingleCountry</div>
  )
}
