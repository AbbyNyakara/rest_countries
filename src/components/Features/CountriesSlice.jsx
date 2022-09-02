import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchAsyncCountries = createAsyncThunk("allCountries/fetchAsyncCountries", async() => {
  const countryData = await axios.get("https://restcountries.com/v3.1/all");
  return countryData.data;
})

const initialState = {
  countries: [],
  filteredCountries: [], 
  filteredRegion: [],
  searchTerm: "",
  selectedRegion: ""
}

// Utility function for filtering 

// This function will return the filtered country based on search term and the selected region

function filterCountries(countries, searchTerm, selectedRegion) {
  searchTerm = searchTerm.toLowerCase();
  selectedRegion = selectedRegion.toLowerCase();

  const filteredCountries = countries.filter(country => {
    // Get the name and region all in lowercase
    const name = country.name.common.toLowerCase();
    const region = country.region.toLowerCase();

    // Check whether the country should be shown or filtered out
    // In this case, no need to filter. This is the default view

    if (searchTerm == "" && selectedRegion == "Filter by Region"){
      return true;
    }

    // In this case, filter only by the region
    if (searchTerm == ""){
      return region.includes(selectedRegion)
    }

    // In this case, only filter by the search Term
    if (selectedRegion=""){
      return name.includes(searchTerm)
    }

    // Lastly filter by both
    return name.includes(searchTerm) && region.includes(selectedRegion);
  })
  return filteredCountries;
}

const countriesSlice = createSlice(
  {
    name: "allCountries",
    initialState,
    reducer: {
      updateSearchTerm : (state, { payload }) => {
        const newSearchTerm = payload
        state.searchTerm = newSearchTerm
        const allCountries = state.countries
        const region = state.selectedRegion
        return state.filteredCountries = filterCountries(allCountries, newSearchTerm, region)
      },
      updateSelectedRegion: (state, { payload }) => {
        const newSelectedRegion = payload
        state.selectedRegion = newSelectedRegion
        const allCountries = state.countries
        const searchTerm = state.searchTerm
        state.filterCountries = filterCountries(allCountries, searchTerm, newSelectedRegion )
      }
    },

    extraReducers: {
      [fetchAsyncCountries.fulfilled]: (state, {payload}) => {
        console.log("Fulfilled")
        return {...state, countries:payload, filteredCountries: payload}
      }
    }
  }
)

export default countriesSlice.reducer;
export const countriesActions = countriesSlice.actions;
export const getAllCountries = (state) => state.allCountries.countries;
export const getSelectedCountries = (state) => state.allCountries.filteredCountries;
export const getSelectedRegion = (state) => state.allCountries.filteredRegion;
