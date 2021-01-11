import React from 'react'

function CitySuggestionTab(props) {
    function testClick(event)
    {
        console.log(event.target.getAttribute('value'));
    }
    return (
        <li onClick = {testClick} value = {props.city}>
           {props.city}
        </li>
    )
}

export default CitySuggestionTab
