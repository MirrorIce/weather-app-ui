import React from 'react'

function WeatherCard(props) {
    return (
        <div>
            <h1>{props.cityDetails.cityDetails.name}</h1>
            <p>Weather Pictogram</p>
            <p>State</p>

            <p>{props.cityDetails.weatherDetails.dataseries[0].temp2m}</p>
            <p>Max temp</p>
        </div>
    )
}

export default WeatherCard
