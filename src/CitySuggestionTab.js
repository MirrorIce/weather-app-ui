import React from 'react'

function CitySuggestionTab(props) {
    function selectCity(event)
    {
        console.log(event.target.getAttribute('value'));
        props.setIsCitySelected(true);
    }
    return (
        <li onClick = {selectCity} value = {props.city}>
           {props.city}
        </li>
    )
}

export default CitySuggestionTab
