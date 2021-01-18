import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import AddWeatherCard from './AddWeatherCard.js'
import WeatherCard from './WeatherCard.js'
function App() {
  //TODO: Find a solution to represent the timezone correctly
  //TODO: Implement the detailed weather view
  //TODO: Research about redux
  //TODO: Research about ant design
  //TODO: Research about ant plugin for react
  let [cityDetails, setCityDetails] = useState([]);
  let [cities,setCities] = useState(JSON.parse(localStorage.getItem('weatherCities')));
  
  useEffect(() =>{
    if (cities!=null){
      cities.map((city,cityIndex) =>{
        fetch('http://www.7timer.info/bin/civil.php?lon='+city.long+'&lat='+city.lat+'&ac=0&unit=metric&output=json&tzshift=0')
        .then(response => response.json())
        .then((data) => {
          let newDetailedCity = {
            cityDetails: city,
            weatherDetails:data
          }
          return setCityDetails(oldDetailedCityArray => [...oldDetailedCityArray, newDetailedCity]);
        }) 
      });
    } 
  },[cities]);


  return (
    <div className="App">
      <div className = "appHead">
        <h1>Weathery</h1>
       <h2>Your friendly weather app</h2>
      </div>
      <p style={{color:"red"}}>NOTE: THERE IS NOT TIMEZONE IMPLEMENTATION ATM SO THE DISPLAYED TIME MAY BE WRONG (100%)</p>
      <div className = 'weatherCards' >
        <AddWeatherCard></AddWeatherCard>
        {cityDetails!=null?cityDetails.map((detailedCity,cityIndex)=>{
          return <WeatherCard key={cityIndex} cityDetails = {detailedCity} />
        }):null
        }
      </div>
    </div>
  );
}

export default App;
