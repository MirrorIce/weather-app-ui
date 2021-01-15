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
                console.log(data);
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

    function addCity(event){
        let cities = localStorage.getItem("weatherCities");
        let arrayCities = JSON.parse(cities); 
        if (isCitySelected == true)
            if (arrayCities != undefined){
                let cityAlreadyAdded = false;
                arrayCities.forEach((value,index) => {
                    if (value == cityName) cityAlreadyAdded = true;
                })
                if (cityAlreadyAdded == false){
                    arrayCities.push(cityName);
                    localStorage.setItem("weatherCities",JSON.stringify(arrayCities));
                }
                else{
                    alert("This city was already added");
                }
            }
            else{
                localStorage.setItem("weatherCities",JSON.stringify([cityName]));
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
