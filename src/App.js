import {  useState,useEffect } from "react";
import axios from 'axios'
import Country from "./Components/Country";
import "./App.css"

function App() {
  const API = `https://xcountries-backend.azurewebsites.net/all`;
  const [countries,setCountries] = useState([])

  const fetchCountries = ()=>{
    axios.get(API)
     .then((country) => {
        setCountries(country.data)
     })
     .catch(error => console.error("Error fetching data: " +error))
  }

  useEffect(()=>{
    fetchCountries()
  },[countries])
  return (
    <div className="App">
      <div className="countries-container">
        {countries.map((item,index) => {
          return <Country item={item} key={index}/>
        })}
      </div>
    </div>
  );
}

export default App;
