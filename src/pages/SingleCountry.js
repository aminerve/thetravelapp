import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SingleCountry() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleCountry();
  }, [name]);

  return (
    <section className='max-w-5xl mx-auto flex items-center justify-center h-screen'>
      {/* {country.flags && (
        <div>
          <article>
            <img src={country.flags.png} alt={country.common?.name} />
          </article>
          <article>
            <h1>{country.common?.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>Population: {new Intl.NumberFormat().format(country.population)}</p>
          </article>
        </div>
      )} */}
      {country.map((country,index)=> (
                <div key={index} className='grid grid-cols1 gap-8 p-8 md:grid-cols-2 bg-slate-500 rounded hover:bg-slate-400 transition-all duration-200'>
                <article>
                  <img src={country.flags.png} alt={country.name.common} />
                </article>
                <article>
                  <h1 className='text-3xl font-bold text-blue-900 mb-8 lg:text-5xl'>{country.name.common}</h1>
                  <ul className='text-blue-900 leading-loose lg:leading-relaxed'>
                    <li><span className='font-bold text-blue-900'>Capital: </span>{country.capital}</li>
                    <li><span className='font-bold text-blue-900'>Region: </span>{country.region}</li>
                    <li><span className='font-bold text-blue-900'>Population: </span>{new Intl.NumberFormat().format(country.population)}</li>
                    </ul>
                      <Link to='/' className='inline-block bg-blue-900 py-4 px-12 rounded mt-8 text-white hover:bg-blue-800 transition-all duration-200'>&larr; Back</Link>
                </article>
              </div>
      ))}


    </section>
  );
}
