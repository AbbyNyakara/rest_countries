import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Country from './components/Country/Country';
import CountryDetail from './components/CountryDetail/CountryDetail';
import './App.scss';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  

  function handleClick() {
    setDarkMode((prevState) => !prevState)
  }

  return (
    <div className={`app ${darkMode ? 'darkmode' : ''} `}>
    <Router>
      <Header onClick={handleClick} darkMode={darkMode}/>
      <Routes>
        <Route path="/" 
        element={
        <div className="app__body">
          <Filter darkMode={darkMode}/>
          <Country darkMode={darkMode} />
        </div>}
        />
        <Route path="/country" element={<CountryDetail darkMode={darkMode}/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
