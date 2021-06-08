import React, { Component } from 'react'
import * as d3 from 'd3';

class DetailedWeather extends Component {

    state = {
        d3Svg: React.createRef(),
        cityData:null,
        width:window.innerWidth * 0.8,
        height:400,
        cityDetails:this.props.cityOverview,
        localDate: new Date()
    }

        componentDidMount(){
        
            let svg = d3.select(this.state.d3Svg.current)
            let tooltip = d3.select('.detailedWeatherView').select('#detailedWeatherTooltip')
                        .attr('width','200px')
            let content = {
                temperature: tooltip.append('h2')
                             .attr("id","temperatureView")
                             .text("0"),
                precType: tooltip.append('p')
                          .attr("id","precTypeView"),
                weather: tooltip.append('img')
                        .attr('width',"80px")
                        .attr('height','80px')
                        .attr("id","weatherView"),
                date: tooltip.append('p')
                              .attr("id","dateView")
            }

            svg.append('path')
            .attr('stroke-width',3)
            .attr('fill','none')
            .attr("id","tempLine")
            .style("transform",'translate(18px,10px)')
            let graph = svg.append('g')
                        .attr('width',window.innerWidth-100)
                        .attr('transform',"translate(0,0)")
                        .attr("id","graph")
                        .attr("height",(this.state.height+10) + "px")
            let gXAxis = graph.append('g')
                        .attr('transform','translate(0,300)')
                        .attr("id","gXAxis");
            let gYAxis = graph.append('g')
                        .attr("height",'420px')
                        .attr("id","gYAxis")
                        .attr('transform','translate(0,10)');

            let circle = svg.append('circle')
            .attr('r','5')
            .style("transition",".2s ease all")
            .attr("id","tempCircle");
        
    }

    componentDidUpdate(prevProps){
        if (this.state.width != window.innerWidth*0.8)
        this.setState({
            width:window.innerWidth*0.8
        });
        if (prevProps.cityOverview != this.props.cityOverview)
        {
            this.setState({cityDetails:this.props.cityOverview})

        if (this.props.cityOverview!= undefined){

            let svg = d3.select(this.state.d3Svg.current)
            .style('width',(this.state.width)+'px')
            .style('height',(this.state.height+10)+"px")
            
            let svgLeft = document.querySelector('svg').getBoundingClientRect().left;
            let svgRight = document.querySelector('svg').getBoundingClientRect().right;
            

            let graph = svg.select('#graph')
            let gXAxis = graph.select('#gXAxis');
            let gYAxis = graph.select("#gYAxis");
            let minTemp = Math.min(...this.props.cityOverview.weatherDetails.dataseries.map((d)=>{return d.temp2m}));
            let maxTemp = Math.max(...this.props.cityOverview.weatherDetails.dataseries.map((d)=>{return d.temp2m}));

            let x = d3.scaleBand()
                    .domain(this.props.cityOverview.weatherDetails.dataseries.map((d)=>{return d.timepoint}))
                    .range([0,window.innerWidth-100])
                    .paddingInner(0.1);
            let y = d3.scaleLinear()
                    // ... used for destructuring ( splitting the array into separate arguments)
                    .domain([minTemp,maxTemp])
                    .range([this.state.height,0]);

            let xAxis = d3.axisBottom(x)
                        .ticks(5);
            let yAxis = d3.axisRight(y)
                        .ticks(5);
                        
            
            if (this.state.width > '500px')
                gXAxis.call(xAxis);
            gYAxis.call(yAxis)
            .call(g => g.select(".domain").remove());

            let tooltip = d3.select('.detailedWeatherView').select('#detailedWeatherTooltip')
                        .attr('width','200px')
            let content = {
                temperature: tooltip.select('#temperatureView'),
                precType: tooltip.select('#precTypeView'),
                weather: tooltip.select('#weatherView')
                        .attr('width',"80px")
                        .attr('height','80px'),
                date: tooltip.select('#dateView')
            }

            let gradient = svg.append('linearGradient')
                        .attr("id",'tempGradient')
                        .attr("x1","0%")
                        .attr("x2","0%")
                        .attr("y1","0%")
                        .attr("y2","100%");
            gradient.append("stop")
            .attr("offset","0%")
            .attr("stop-color","red");
            gradient.append("stop")
            .attr("offset","50%")
            .attr("stop-color",'green');
            gradient.append("stop")
            .attr("offset","100%")
            .attr("stop-color","darkblue");


            let lineFunction = d3.line()
                            .x((d,i) =>{ return i*(this.state.width/this.props.cityOverview.weatherDetails.dataseries.length) })
                            .y((d,i)=>{return (this.state.height/(minTemp-maxTemp)*d.temp2m + this.state.height*maxTemp/(maxTemp-minTemp))})
                        
            svg.select('#tempLine')
            .attr('d',lineFunction(this.props.cityOverview.weatherDetails.dataseries.map((d)=>{return d})))
            .attr('stroke-width',3)
            .attr('stroke','url(#tempGradient)')
            .attr('fill','none')
            let circle = svg.select('#tempCircle')
            .attr('r','5')
            .style('fill','url(#tempGradient)')
            .style("transition",".2s ease all");
            
            svg.on("mousemove",(_d,i)=>{
                let unitValue = (this.state.width)/(this.props.cityOverview.weatherDetails.dataseries.length);
                let index = Math.trunc((_d.clientX-svgLeft)/unitValue);
                if (index >= 0 && index < this.props.cityOverview.weatherDetails.dataseries.length){
                    let currentDate = new Date();
                    const timepointToMillis =  this.props.cityOverview.weatherDetails.dataseries[index].timepoint*3600*1000 - 3*1000*3600;
                    let unixSelectedDate = currentDate.getTime() + timepointToMillis;
                    //The constants are added for the translation compensation of the other elements (path and axes)
                    circle.attr("cx",( unitValue*index+18 )+"px");
                    circle.attr('cy',(this.state.height/(minTemp-maxTemp)*this.props.cityOverview.weatherDetails.dataseries[index].temp2m + this.state.height*maxTemp/(maxTemp-minTemp))+10);
                    content.temperature.text(this.props.cityOverview.weatherDetails.dataseries[index].temp2m+"°C");
                    content.precType.text(this.props.cityOverview.weatherDetails.dataseries[index].prec_type);
                    content.weather.attr("src",this.props.cityOverview.weatherDetails.dataseries[index].weather+'.svg');
                    content.date.text(new Date(unixSelectedDate).toLocaleString());
                    
                }            
            })
    }
        }
       
    }
    
    render() {
        return (
            <div className = 'detailedWeatherView'>
                <div id = "detailedWeatherTooltip">

                </div>
                <svg ref = {this.state.d3Svg}>
                </svg>
                <h2>{this.state.cityDetails!==undefined?this.state.cityDetails.cityDetails.name:null}</h2>
            </div>
        )
    }
}

export default DetailedWeather
