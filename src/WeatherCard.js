import React from 'react'

function WeatherCard(props) {
    //<!-- {props.cityDetails.weatherDetails.dataseries[0].temp2m} -->
    return (
        <div onClick={() =>{
                props.setCityOverview(props.cityDetails.weatherDetails.dataseries)}
                } 
                className ='weatherCard'> 
            <h3>{props.cityDetails.cityDetails.name}</h3>
            <img alt='' width="80px" height = "80px" src={props.cityDetails.weatherDetails.dataseries[0].weather+'.svg'} ></img>
            <p>{props.cityDetails.weatherDetails.dataseries=== undefined?null:props.cityDetails.weatherDetails.dataseries[0].temp2m} °C</p>
        </div>
    )
}

export default WeatherCard
