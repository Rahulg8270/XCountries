import {  useState,useEffect } from "react";
import axios from 'axios'
import Card from "./Components/Card";
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
      <div className="cards-container">
      {countries.length > 0 ? ( countries.map((country,index) => {
        console.log(country.name)
        return <Card item={country} key={index}/>
      })) : <h1>loading...</h1>}
      </div>
    </div>
  );
}

export default App;
