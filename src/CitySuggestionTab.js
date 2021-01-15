import React from 'react'

function CitySuggestionTab(props) {
    function selectCity(event)
    {
        props.setIsCitySelected(true);
        props.setCityInput(event.target.getAttribute('value'));
    }
    return (
        <li onMouseDown = {selectCity} value = {props.city}>
           {props.city}
        </li>
    )
}

export default CitySuggestionTab
