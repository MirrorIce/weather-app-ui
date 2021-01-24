import React, { Component } from 'react'
import * as d3 from 'd3';

class DetailedWeather extends Component {
    
    state = {
        d3Svg: React.createRef()
    }

    componentDidMount(){
        let data = [1,2,2,5,1,2,4];

        let svg = d3.select(this.state.d3Svg.current)
        .style('width','400px')
        .style('height','500px');
        
        let graph = svg.append('g')
                    .attr('width',400);
        let gXAxis = graph.append('g')
                     .attr('transform','translate(0,410)');
        let gYAxis = graph.append('g')
        let x = d3.scaleBand()
                .domain([0,1,2,3,4,5,6,7])
                .range([0,300])
        let y = d3.scaleLinear()
                .domain([0,5])
                .range([300,0]);

        let xAxis = d3.axisBottom(x);
        let yAxis = d3.axisLeft(y)
                    .ticks(7);
            
        gXAxis.call(xAxis);
        gYAxis.call(yAxis);
        
        let rects = graph.selectAll('rect')
                    .data(data);
        rects.attr('width',x.bandwidth)
             .attr('class','bar-rect')
             .attr('height',d=>400-y(d))
             .attr('x',(d,i)=>x(i))
             .attr('y',(d)=>y(d));
        rects.enter()
            .append('rect')
            .attr('class', 'bar-rect')
            .attr('width', x.bandwidth)
            .attr('height', d => 400 - y(d))
            .attr('x', (d,i) => x(i))
            .attr('y', d => y(d));

  
        
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
