import React, { Component, useState } from 'react'
import CitySuggestionContainer from "./CitySuggestionContainer.js"

function AddWeatherCard() {
    const [cityName, setCityName] = useState('');
    const [citySuggestions, setCitySuggestions] = useState([]);
    const [isCitySelected, setIsCitySelected] = useState(false);
    function processCityNameInput(event){
        setCityName(event.target.value);
        if (isCitySelected == false)
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
                    //arr = [];
                    //arr.push(0);
                    return arr;
                    //data._embedded["city:search-results"]
               
                });
            } 
        });
        else{
            setCitySuggestions((arr)=>{
                arr.length = 0;
                return arr;
            });
        }
    }
    function toggleSuggestions(isVisible)
    {
        if (isVisible){
            setIsCitySelected(false);
        }
        else{
            setIsCitySelected(true);
            setCitySuggestions((arr) =>{
                //Setting the length to 0 effectively deletes the array
                arr.length = 0;
                return arr;
            });
        }
    }
    return (
        <div className="addWeatherCard">
                <h3>Add city</h3>
                <button>+</button>
                <input onFocus={()=>{toggleSuggestions(true)}} onBlur = {()=>{toggleSuggestions(false)}} onChange={processCityNameInput} value={cityName} type='text' placeholder="City Name"></input>
                <CitySuggestionContainer setCityInput={setCityName} setIsCitySelected = {setIsCitySelected} cities={citySuggestions}/>
            </div>
        )
    
}

export default AddWeatherCard
