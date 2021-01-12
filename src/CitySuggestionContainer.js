import React from 'react'
import CitySuggestionTab from './CitySuggestionTab.js'

function CitySuggestionContainer(props) {
    
    return (
        <div>
            <ul>
                {props.cities.map((value,idx) => <CitySuggestionTab setIsCitySelected = {props.setIsCitySelected} key={idx} city={value} ></CitySuggestionTab>)}
            </ul>
        </div>
    )
}

export default CitySuggestionContainer
