import React, { Component } from 'react'
import * as d3 from 'd3';

class DetailedWeather extends Component {
    
    state = {
        d3Ref: React.createRef()
    }

    componentDidMount(){
        d3.select("body")
        .selectAll('h2')
        .data([1,2,3])
        .enter()
        .append("h2")
        .text('XX')
    }
    


    render() {
        return (
            <div ref = {this.state.d3Ref}>
                
            </div>
        )
    }
}

export default DetailedWeather
