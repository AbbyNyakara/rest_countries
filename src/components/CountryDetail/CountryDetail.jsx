import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CountryDetail.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCountryDetail } from '../Features/CountriesSlice';


const CountryDetail = () => {

  let dispatch = useDispatch()

  let { name } = useParams();
  
  useEffect(()=> {
    dispatch(fetchAsyncCountryDetail(name))
  }, [dispatch])

  const data = useSelector(state => state.allCountries.countryDetail)
  console.log(data)

  return (
    <>
    {
      data && <div className='countryDetail'>
        <Link to='/'>
          <button className="countryDetail__backButton">
              <i className="fa-solid fa-arrow-left arrow-icon"></i>
              <p>Back</p>
          </button>
        </Link>
        
        <div className="countryDetail__info">
          <div className="countryDetail__left">
            <img src={data[0]?.flags.svg} alt="Country Flag" />
          </div>

          <div className="countryDetail__right">
            <h2>{data[0]?.name.common}</h2>
            <div className="countryDetail__more">
              <div className="left">
                <p>Native Name: <span>{data[0]?.name.official}</span></p>
                <p>Population: <span>{data[0]?.population}</span></p>
                <p>Region: <span>{data[0]?.region}</span></p>
                <p>Sub Region: <span>{data[0]?.subregion}</span></p>
                <p>Capital: <span>{data[0]?.capital[0]}</span></p>
              </div>
              {/* Traverse through the object */}
              <div className="right">
                <p>Top Level Domain: <span>Belgie</span></p>
                <p>Currencies: <span>Belgie</span></p>
                <p>Languages: <span>{data[0]?.languages[0]}</span></p>
              </div>
            </div>
            <div className="countyDetail__bottom">
              <p className='border__text'>Border Countries: </p>
              <div className="border__countries">
                <p>France</p>
                <p>Germany</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  }
  </>
  )
}

export default CountryDetail