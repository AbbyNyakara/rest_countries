import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncCountries, getSelectedCountries } from '../Features/CountriesSlice';
import './Country.scss';

const Country = () => {

  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchAsyncCountries());
  },
   [dispatch])

   const countryData = useSelector(getSelectedCountries);
   console.log(countryData);

   function handleClick(){
      console.log(clicked)
    }


  return (
    <div className="country">
      {
        countryData.map((country) => {
          return(
            <Link to={`/country/${country.name.common}`} key={country.name.common} className='link'>
              <div className='country__card'>
                <div className="flag__section">
                  <img src={country.flags.svg} alt="" />
                </div>
                <div className="country__info">
                  <h3 className='country__name'>{country.name.common}</h3>
                  <p className='country__specs'>Population:  <span>{country.population}</span></p>
                  <p className='country__specs'>Region:  <span>{country.region}</span></p>
                  <p className='country__specs'>Capital:  <span>{country.capital}</span></p>
                </div>
              </div>
            </Link>
            
            )
        })
      }
    </div>
  )
}

export default Country