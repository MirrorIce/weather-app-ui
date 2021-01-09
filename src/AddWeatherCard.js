import React, { Component, useState } from 'react'

function AddWeatherCard() {
    const [cityName, setCityName] = useState('');

    function processCityNameInput(event){
        setCityName(event.target.value);
    }
    return (
        <div className="addWeatherCard">
                <h3>Add city</h3>
                <button>+</button>
                <input onChange={processCityNameInput} value={cityName} type='text' placeholder="City Name"></input>
            </div>
        )
    
}

export default AddWeatherCard
