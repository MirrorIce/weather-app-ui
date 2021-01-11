import React, { Component, useState } from 'react'
import CitySuggestionContainer from "./CitySuggestionContainer.js"

function AddWeatherCard() {
    const [cityName, setCityName] = useState('');
    const [citySuggestions, setCitySuggestions] = useState([]);

    function processCityNameInput(event){
        setCityName(event.target.value);
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
                    //arr = [];
                    //arr.push(0);
                    return arr;
                    //data._embedded["city:search-results"]
               
                });
            } 
        });
    }
    return (
        <div className="addWeatherCard">
                <h3>Add city</h3>
                <button>+</button>
                <input onChange={processCityNameInput} value={cityName} type='text' placeholder="City Name"></input>
                <CitySuggestionContainer cities={citySuggestions}/>
            </div>
        )
    
}

export default AddWeatherCard
