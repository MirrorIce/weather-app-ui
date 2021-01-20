import React, { Component } from 'react'
import * as d3 from 'd3';

class DetailedWeather extends Component {
    
    state = {
        d3Svg: React.createRef()
    }

    componentDidMount(){
        d3.select(this.state.d3Svg.current)
        .style('width','400px')
        .style('height','400px')
        .append('g')
        
    }
    


    render() {
        return (
            <div >
                <svg ref = {this.state.d3Svg}>

                </svg>
                
            </div>
        )
    }
}

export default DetailedWeather
