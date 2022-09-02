import { configureStore } from "@reduxjs/toolkit";
import CountriesReducer from './CountriesSlice'

const store = configureStore({
  reducer: {
    allCountries: CountriesReducer
  }
});

export default store;