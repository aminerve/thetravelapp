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
                <div key={index}>
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
      ))}

      <Link to='/' className='inline-block bg-slate-600 py-4 px-12 rounded mt-8 text-white hover:bg-slate-400 transition-all duration-200'>&larr; Back</Link>
    </section>
  );
}
