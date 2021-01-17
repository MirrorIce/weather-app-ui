import React, { Component, useState } from 'react'
import CitySuggestionContainer from "./CitySuggestionContainer.js"

function AddWeatherCard() {
    const [cityName, setCityName] = useState('');
    const [citySuggestions, setCitySuggestions] = useState([]);
    const [isCitySelected, setIsCitySelected] = useState(false);
    const [isSuggestionVisible, setIsSuggestionVisible] = useState(false);

    function processCityNameInput(event){
        //Keep the input state
        setCityName(event.target.value);
        //Reset the city selection
        setIsCitySelected(false);
        fetch('https://api.teleport.org/api/cities?search='+event.target.value)
            .then(response => response.json())
            .then((data) => {if (data!=null){
                setCitySuggestions((arr) =>{
                    //Setting the length to 0 effectively deletes the array
                    arr.length = 0;
                    if (event.target.value.length > 2){
                         data._embedded["city:search-results"].forEach((value,index) =>{
                            arr.push(value.matching_full_name);
                         });
                        }

                    return arr;     
                });
            } 
        });
    }
    function toggleSuggestions(isVisible)
    {
        if (isVisible){
            setIsSuggestionVisible(false);
        }
        else{
            setIsSuggestionVisible(true);
            setCitySuggestions((arr) =>{
                //Setting the length to 0 effectively deletes the array
                arr.length = 0;
                return arr;
            });
        }
    }
    function populateCityDetails(cityName){
        let cityDetails = {
            name:cityName,
            lat:0,
            long:0,
            geoid:0,
            tzoffset:0
        }
        return new Promise(function(resolve){
            //First split the name so that it doesn't have any paranthesis names
            //The API doesn't like city names with parantheses in the end so it will return an invalid value ( no result found )
            cityName = cityName.split('(')[0];
            //Fetch the city GeoID
            fetch('https://api.teleport.org/api/cities?search='+cityName)
                .then(response => response.json())
                .then((data) => {if (data!=null){
                     console.log(data);
                     let cityURL = data['_embedded']['city:search-results'][0]['_links']['city:item']['href'];
                     let cityGeoId = cityURL.split('/')[5];
                     cityDetails.geoid = cityGeoId;
                    fetch('https://api.teleport.org/api/cities/'+cityGeoId)
                     .then(response => response.json())
                      .then((data) => {
                          cityDetails.lat = data.location.latlon.latitude;
                          cityDetails.long = data.location.latlon.longitude;
                          resolve(cityDetails);
                })

            } 
        });
        });
        
    }
    function addCity(event){
        let cities = localStorage.getItem("weatherCities");
        let arrayCities = JSON.parse(cities); 
        if (isCitySelected == true){
            let detailedCity = null;
            populateCityDetails(cityName)
            .then((detailedCity) =>{
                if (arrayCities != undefined){
                    let cityAlreadyAdded = false;
                    arrayCities.forEach((value,index) => {
                        if (value.name == cityName) cityAlreadyAdded = true;
                    })
                    if (cityAlreadyAdded == false){
                        arrayCities.push(detailedCity);
                        localStorage.setItem("weatherCities",JSON.stringify(arrayCities));
                    }
                    else{
                        alert("This city was already added");
                    }
                }
                else{
                    localStorage.setItem("weatherCities",JSON.stringify([detailedCity]));
                }
            })
        }
        else{
            alert("Please select a city from the list!");
        }
            
    }

    return (
        <div className="addWeatherCard">
                <h3>Add city</h3>
                <button onClick = {addCity}>+</button>
                <input onFocus={()=>{toggleSuggestions(true)}} onBlur = {()=>{toggleSuggestions(false)}} onChange={processCityNameInput} value={cityName} type='text' placeholder="City Name"></input>
                <CitySuggestionContainer setCityInput={setCityName} setIsCitySelected = {setIsCitySelected} cities={citySuggestions}/>
            </div>
        )
    
}

export default AddWeatherCard
