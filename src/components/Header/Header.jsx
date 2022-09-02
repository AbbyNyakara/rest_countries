import React, {useState} from 'react';
import './Header.scss';


const Header = ({onClick, darkMode}) => {

  return (
    <div className="header">
      <h1 className='header__logo'>Where in the world</h1>
      <div className="header__mode-changer" onClick={onClick}>
        <i className="fa-regular fa-moon"></i>
        <p className='header__mode'>Dark Mode</p>
      </div>
    </div>
  )
}

export default Header