import React from 'react'

function WeatherCard(props) {
    //<!-- {props.cityDetails.weatherDetails.dataseries[0].temp2m} -->
    return (
        <div onClick={() =>{
                props.setCityOverview(props.cityDetails.weatherDetails.dataseries)}
                } 
                className ='weatherCard'> 
            <h1>{props.cityDetails.cityDetails.name}</h1>
            <p>Weather Pictogram</p>
            <p>State</p>
            
            <p>{props.cityDetails.weatherDetails.dataseries==undefined?null:props.cityDetails.weatherDetails.dataseries[0].temp2m}</p>
            <p>Max temp</p>
        </div>
    )
}

export default WeatherCard
