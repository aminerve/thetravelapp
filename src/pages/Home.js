import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const [countries, setCountries] = useState([])
  useEffect(() => {
    const fetchCountryData = async() => {
        try {
            const res = await fetch('https://restcountries.com/v3.1/all')
            const data = await res.json()
            setCountries(data)
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }
    fetchCountryData()
  }, [])
    return (
    <>{!countries ? (<h1>Loading...</h1>) : (<>
    <section className='p-8 max-w-7xl mx-auto'>
        <div className='text-center'>
            <h1 className='flex items-center justify-center text-slate-700 text-center px-5 text-3xl font-bold'>The Travel App</h1>
            <p>Powered by <a href='https://restcountries.com/' target='_blank' rel="noopener noreferrer" className='text-indigo-600 active:text-orange-400'>REST Countries</a></p>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20'>
            {countries.map((country) => (
                <article className='bg-slate-500 p-4 rounded hover:bg-slate-600 transition-all duration-200'>
                    <img src={country.flags.png} alt={country.name.common} className='rounded  w-full object-cover' />
                    <h3 className='text-blue-900 font-bold text-lg'>{country.name.common}</h3>
                    <p className='font-bold'>Capital: {country.capital}</p>
                    <p className='font-bold'>Population: {country.population}</p>
                </article>
            ))}
        </div>
    </section>
    </>)}</>
  )
}
