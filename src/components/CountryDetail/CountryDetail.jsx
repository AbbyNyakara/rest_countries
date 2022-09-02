import React from 'react';
import './CountryDetail.scss';

const CountryDetail = () => {
  return (
    <div className='countryDetail'>
      <button className="countryDetail__backButton">
          <i className="fa-solid fa-arrow-left arrow-icon"></i>
          <p>Back</p>
      </button>
      
      <div className="countryDetail__info">
        <div className="countryDetail__left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/692px-Flag_of_Belgium.svg.png?20220420044906" alt="Country Flag" />
        </div>

        <div className="countryDetail__right">
          <h2>Belgium</h2>
          <div className="countryDetail__more">
            <div className="left">
              <p>Native Name: <span>Belgie</span></p>
              <p>Population: <span>Belgie</span></p>
              <p>Region: <span>Belgie</span></p>
              <p>Sub Region: <span>Belgie</span></p>
              <p>Capital: <span>Belgie</span></p>
            </div>
            <div className="right">
              <p>Top Level Domain: <span>Belgie</span></p>
              <p>Currencies: <span>Belgie</span></p>
              <p>Languages: <span>Belgie</span></p>
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
  )
}

export default CountryDetail