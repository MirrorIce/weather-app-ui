import logo from './logo.svg';
import './App.css';
import AddWeatherCard from './AddWeatherCard.js'

function App() {

  let cities = JSON.parse(localStorage.getItem('weatherCities'));
  
  return (
    <div className="App">
      <h1>Weathery</h1>
      <h2>Your friendly weather app</h2>
      <AddWeatherCard></AddWeatherCard>
      {cities.map((city,cityIndex)=>{
        fetch('https://api.teleport.org/api/cities?search='+city)
        .then(response => response.json())
        .then((data) => {if (data!=null){
            let cityURL = data['_embedded']['city:search-results'][0]['_links']['city:item']['href'];
            let cityGeoId = cityURL.split('/')[5];
            console.log(cityGeoId);

            } 
          });
        }
      
      )}



    </div>
  );
}

export default App;
