import React, { useRef } from 'react';
import { countriesActions } from '../Features/CountriesSlice';
import { useDispatch } from 'react-redux';
import './Filter.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const regionRef = useRef(null);

  function handleInputChange(){
    const newSearchTerm = inputRef.current.value;
    dispatch(countriesActions.updateSearchTerm(newSearchTerm))
    // console.log(newSearchTerm);
  }

  function handleRegionChange(){
    const newRegionInput = regionRef.current.value;
    dispatch(countriesActions.updateSelectedRegion(newRegionInput))
    // console.log(newRegionInput)
  }

  return (
    <div className="filter">
      <div className="filter_search_countries">
          <i className="fa-solid fa-magnifying-glass search__icon"></i>
          <input type="text" className="search__input" placeholder='Search for a Country' ref={inputRef} onChange={handleInputChange}/> 
      </div>
      <div className="search__filter">
        <select className='select_filter' ref={regionRef} onChange={handleRegionChange}>
          <option className="filter__countries" value="Filter by Region" >Filter by Region</option>
          <option className="filter__countries" value ="Africa" >Africa</option>
          <option className="filter__countries" value = "America">America</option>
          <option className="filter__countries" value = "Asia">Asia</option>
          <option className="filter__countries" value="Europe">Europe</option>
          <option className="filter__countries" value = "Oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}

export default Filter