import React, { Component } from 'react'
import * as d3 from 'd3';

class DetailedWeather extends Component {

    details =[{"timepoint":3,"cloudcover":9,"lifted_index":10,"prec_type":"none","prec_amount":1,"temp2m":-50,"rh2m":"92%","wind10m":{"direction":"NW","speed":2},"weather":"cloudyday"},{"timepoint":6,"cloudcover":5,"lifted_index":15,"prec_type":"none","prec_amount":1,"temp2m":-7,"rh2m":"92%","wind10m":{"direction":"NE","speed":2},"weather":"humidnight"},{"timepoint":9,"cloudcover":9,"lifted_index":10,"prec_type":"none","prec_amount":1,"temp2m":-5,"rh2m":"80%","wind10m":{"direction":"E","speed":2},"weather":"cloudynight"},{"timepoint":12,"cloudcover":9,"lifted_index":10,"prec_type":"snow","prec_amount":1,"temp2m":-5,"rh2m":"87%","wind10m":{"direction":"N","speed":2},"weather":"lightsnownight"},{"timepoint":15,"cloudcover":9,"lifted_index":10,"prec_type":"snow","prec_amount":2,"temp2m":-6,"rh2m":"95%","wind10m":{"direction":"N","speed":2},"weather":"lightsnownight"},{"timepoint":18,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":2,"temp2m":10,"rh2m":"94%","wind10m":{"direction":"N","speed":2},"weather":"lightsnowday"},{"timepoint":21,"cloudcover":9,"lifted_index":6,"prec_type":"none","prec_amount":2,"temp2m":20,"rh2m":"90%","wind10m":{"direction":"NW","speed":2},"weather":"cloudyday"},{"timepoint":24,"cloudcover":9,"lifted_index":6,"prec_type":"snow","prec_amount":2,"temp2m":25,"rh2m":"85%","wind10m":{"direction":"NW","speed":2},"weather":"lightsnowday"},{"timepoint":27,"cloudcover":9,"lifted_index":10,"prec_type":"snow","prec_amount":2,"temp2m":-4,"rh2m":"95%","wind10m":{"direction":"NW","speed":2},"weather":"lightsnowday"},{"timepoint":30,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":2,"temp2m":-5,"rh2m":"95%","wind10m":{"direction":"N","speed":2},"weather":"lightsnownight"},{"timepoint":33,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":3,"temp2m":-6,"rh2m":"95%","wind10m":{"direction":"N","speed":2},"weather":"lightsnownight"},{"timepoint":36,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":3,"temp2m":-6,"rh2m":"90%","wind10m":{"direction":"N","speed":2},"weather":"lightsnownight"},{"timepoint":39,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":3,"temp2m":-6,"rh2m":"93%","wind10m":{"direction":"N","speed":2},"weather":"lightsnownight"},{"timepoint":42,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":3,"temp2m":-6,"rh2m":"91%","wind10m":{"direction":"N","speed":2},"weather":"lightsnowday"},{"timepoint":45,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":3,"temp2m":-5,"rh2m":"93%","wind10m":{"direction":"NW","speed":3},"weather":"lightsnowday"},{"timepoint":48,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":3,"temp2m":-5,"rh2m":"90%","wind10m":{"direction":"NW","speed":3},"weather":"lightsnowday"},{"timepoint":51,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":3,"temp2m":-6,"rh2m":"91%","wind10m":{"direction":"NW","speed":3},"weather":"lightsnowday"},{"timepoint":54,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":3,"temp2m":-7,"rh2m":"94%","wind10m":{"direction":"NW","speed":3},"weather":"lightsnownight"},{"timepoint":57,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":3,"temp2m":-7,"rh2m":"98%","wind10m":{"direction":"NW","speed":3},"weather":"lightsnownight"},{"timepoint":60,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":4,"temp2m":-7,"rh2m":"98%","wind10m":{"direction":"NW","speed":3},"weather":"snownight"},{"timepoint":63,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":4,"temp2m":-8,"rh2m":"97%","wind10m":{"direction":"NW","speed":3},"weather":"snownight"},{"timepoint":66,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":4,"temp2m":-8,"rh2m":"96%","wind10m":{"direction":"NW","speed":2},"weather":"snowday"},{"timepoint":69,"cloudcover":9,"lifted_index":15,"prec_type":"none","prec_amount":4,"temp2m":-7,"rh2m":"92%","wind10m":{"direction":"NW","speed":3},"weather":"cloudyday"},{"timepoint":72,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":4,"temp2m":-5,"rh2m":"94%","wind10m":{"direction":"NW","speed":3},"weather":"snowday"},{"timepoint":75,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":4,"temp2m":-7,"rh2m":"97%","wind10m":{"direction":"NW","speed":2},"weather":"snowday"},{"timepoint":78,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":4,"temp2m":-9,"rh2m":"97%","wind10m":{"direction":"N","speed":2},"weather":"snownight"},{"timepoint":81,"cloudcover":8,"lifted_index":15,"prec_type":"snow","prec_amount":4,"temp2m":-7,"rh2m":"99%","wind10m":{"direction":"E","speed":2},"weather":"snownight"},{"timepoint":84,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":4,"temp2m":-6,"rh2m":"92%","wind10m":{"direction":"E","speed":2},"weather":"snownight"},{"timepoint":87,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":4,"temp2m":-4,"rh2m":"98%","wind10m":{"direction":"E","speed":2},"weather":"snownight"},{"timepoint":90,"cloudcover":9,"lifted_index":10,"prec_type":"snow","prec_amount":4,"temp2m":-3,"rh2m":"97%","wind10m":{"direction":"S","speed":2},"weather":"snowday"},{"timepoint":93,"cloudcover":9,"lifted_index":10,"prec_type":"snow","prec_amount":4,"temp2m":-1,"rh2m":"96%","wind10m":{"direction":"NW","speed":2},"weather":"snowday"},{"timepoint":96,"cloudcover":9,"lifted_index":6,"prec_type":"snow","prec_amount":4,"temp2m":-1,"rh2m":"95%","wind10m":{"direction":"NW","speed":2},"weather":"snowday"},{"timepoint":99,"cloudcover":9,"lifted_index":6,"prec_type":"snow","prec_amount":4,"temp2m":-1,"rh2m":"98%","wind10m":{"direction":"N","speed":2},"weather":"snowday"},{"timepoint":102,"cloudcover":9,"lifted_index":6,"prec_type":"snow","prec_amount":4,"temp2m":-1,"rh2m":"97%","wind10m":{"direction":"NW","speed":2},"weather":"snownight"},{"timepoint":105,"cloudcover":9,"lifted_index":6,"prec_type":"snow","prec_amount":4,"temp2m":-1,"rh2m":"97%","wind10m":{"direction":"NW","speed":2},"weather":"snownight"},{"timepoint":108,"cloudcover":9,"lifted_index":6,"prec_type":"snow","prec_amount":4,"temp2m":-1,"rh2m":"98%","wind10m":{"direction":"NW","speed":2},"weather":"snownight"},{"timepoint":111,"cloudcover":9,"lifted_index":6,"prec_type":"snow","prec_amount":4,"temp2m":-1,"rh2m":"95%","wind10m":{"direction":"N","speed":1},"weather":"snownight"},{"timepoint":114,"cloudcover":9,"lifted_index":6,"prec_type":"snow","prec_amount":4,"temp2m":-1,"rh2m":"96%","wind10m":{"direction":"W","speed":2},"weather":"snowday"},{"timepoint":117,"cloudcover":9,"lifted_index":2,"prec_type":"snow","prec_amount":4,"temp2m":-1,"rh2m":"99%","wind10m":{"direction":"SE","speed":2},"weather":"snowday"},{"timepoint":120,"cloudcover":9,"lifted_index":2,"prec_type":"snow","prec_amount":4,"temp2m":-1,"rh2m":"95%","wind10m":{"direction":"NW","speed":2},"weather":"snowday"},{"timepoint":123,"cloudcover":9,"lifted_index":6,"prec_type":"snow","prec_amount":4,"temp2m":-1,"rh2m":"96%","wind10m":{"direction":"W","speed":2},"weather":"snowday"},{"timepoint":126,"cloudcover":9,"lifted_index":6,"prec_type":"snow","prec_amount":5,"temp2m":-1,"rh2m":"98%","wind10m":{"direction":"SW","speed":2},"weather":"snownight"},{"timepoint":129,"cloudcover":9,"lifted_index":6,"prec_type":"snow","prec_amount":5,"temp2m":-1,"rh2m":"95%","wind10m":{"direction":"SW","speed":2},"weather":"snownight"},{"timepoint":132,"cloudcover":9,"lifted_index":6,"prec_type":"snow","prec_amount":5,"temp2m":-2,"rh2m":"98%","wind10m":{"direction":"NW","speed":2},"weather":"snownight"},{"timepoint":135,"cloudcover":9,"lifted_index":10,"prec_type":"snow","prec_amount":5,"temp2m":-4,"rh2m":"95%","wind10m":{"direction":"N","speed":2},"weather":"snownight"},{"timepoint":138,"cloudcover":9,"lifted_index":15,"prec_type":"snow","prec_amount":5,"temp2m":-7,"rh2m":"94%","wind10m":{"direction":"N","speed":2},"weather":"snowday"},{"timepoint":141,"cloudcover":9,"lifted_index":15,"prec_type":"none","prec_amount":5,"temp2m":-4,"rh2m":"79%","wind10m":{"direction":"E","speed":2},"weather":"cloudyday"},{"timepoint":144,"cloudcover":9,"lifted_index":15,"prec_type":"none","prec_amount":5,"temp2m":-2,"rh2m":"66%","wind10m":{"direction":"N","speed":2},"weather":"cloudyday"},{"timepoint":147,"cloudcover":4,"lifted_index":15,"prec_type":"none","prec_amount":5,"temp2m":-6,"rh2m":"63%","wind10m":{"direction":"SE","speed":2},"weather":"pcloudyday"},{"timepoint":150,"cloudcover":4,"lifted_index":15,"prec_type":"none","prec_amount":5,"temp2m":-9,"rh2m":"52%","wind10m":{"direction":"E","speed":2},"weather":"pcloudynight"},{"timepoint":153,"cloudcover":2,"lifted_index":15,"prec_type":"none","prec_amount":5,"temp2m":-8,"rh2m":"75%","wind10m":{"direction":"SE","speed":2},"weather":"clearnight"},{"timepoint":156,"cloudcover":4,"lifted_index":15,"prec_type":"none","prec_amount":5,"temp2m":-6,"rh2m":"80%","wind10m":{"direction":"SE","speed":2},"weather":"pcloudynight"},{"timepoint":159,"cloudcover":8,"lifted_index":15,"prec_type":"none","prec_amount":5,"temp2m":-6,"rh2m":"89%","wind10m":{"direction":"SE","speed":2},"weather":"cloudynight"},{"timepoint":162,"cloudcover":7,"lifted_index":15,"prec_type":"none","prec_amount":5,"temp2m":-5,"rh2m":"87%","wind10m":{"direction":"SE","speed":2},"weather":"mcloudyday"},{"timepoint":165,"cloudcover":9,"lifted_index":10,"prec_type":"none","prec_amount":5,"temp2m":-1,"rh2m":"94%","wind10m":{"direction":"SE","speed":2},"weather":"cloudyday"},{"timepoint":168,"cloudcover":9,"lifted_index":6,"prec_type":"none","prec_amount":5,"temp2m":-1,"rh2m":"100%","wind10m":{"direction":"S","speed":2},"weather":"cloudyday"},{"timepoint":171,"cloudcover":9,"lifted_index":6,"prec_type":"none","prec_amount":5,"temp2m":-1,"rh2m":"90%","wind10m":{"direction":"SE","speed":2},"weather":"cloudyday"},{"timepoint":174,"cloudcover":6,"lifted_index":10,"prec_type":"none","prec_amount":5,"temp2m":-2,"rh2m":"89%","wind10m":{"direction":"E","speed":2},"weather":"mcloudynight"},{"timepoint":177,"cloudcover":4,"lifted_index":10,"prec_type":"none","prec_amount":5,"temp2m":-2,"rh2m":"83%","wind10m":{"direction":"E","speed":2},"weather":"pcloudynight"},{"timepoint":180,"cloudcover":5,"lifted_index":10,"prec_type":"none","prec_amount":5,"temp2m":-2,"rh2m":"88%","wind10m":{"direction":"NE","speed":2},"weather":"pcloudynight"},{"timepoint":183,"cloudcover":9,"lifted_index":6,"prec_type":"snow","prec_amount":5,"temp2m":-1,"rh2m":"97%","wind10m":{"direction":"NW","speed":2},"weather":"snownight"},{"timepoint":186,"cloudcover":9,"lifted_index":6,"prec_type":"snow","prec_amount":5,"temp2m":-1,"rh2m":"95%","wind10m":{"direction":"NW","speed":2},"weather":"snowday"},{"timepoint":189,"cloudcover":9,"lifted_index":6,"prec_type":"snow","prec_amount":5,"temp2m":-1,"rh2m":"99%","wind10m":{"direction":"NW","speed":2},"weather":"snowday"},{"timepoint":192,"cloudcover":9,"lifted_index":6,"prec_type":"snow","prec_amount":5,"temp2m":-1,"rh2m":"97%","wind10m":{"direction":"NW","speed":2},"weather":"snowday"}]
    
    state = {
        d3Svg: React.createRef(),
        cityData:null,
        width:window.innerWidth,
        height:window.innerHeight
    }

    temp2Color = function(temperature){
        console.log(temperature);
        if (temperature<0)
            return 'rgb(150,200,'+(255-temperature*5)+')';
        else if (temperature > 22)
            return 'rgb('+(255-temperature*5)+',50,0)';
        else
            return  'rgb(200,'+(255-temperature*5)+',0)';
    }
    componentDidUpdate(){
        if (this.state.width != window.innerWidth)
            this.setState({
                width:window.innerWidth,
                height:window.innerHeight
            });
    }
    componentDidMount(){
        
        
        console.log(this.props.cityOverview);

        let svg = d3.select(this.state.d3Svg.current)
        .style('width',this.state.width-50+'px')
        .style('height','400px')
        
        
        let graph = svg.append('g')
                    .attr('width',window.innerWidth)
                    .attr('transform','translate(40px,0)')
        let gXAxis = graph.append('g')
                     .attr('transform','translate(0,300)');
        let gYAxis = graph.append('g')
        let x = d3.scaleBand()
                .domain(this.details.map((d,i)=>{return d.timepoint}))
                .range([0,window.innerWidth-100])
                .paddingInner(0.1);
        let y = d3.scaleLinear()
                // ... used for destructuring ( splitting the array into separate arguments)
                .domain([-2+Math.min(...this.details.map((d)=>{return d.temp2m})),5+Math.max(...this.details.map((d)=>{return d.temp2m}))])
                .range([300,0]);

        let xAxis = d3.axisBottom(x)
                    .ticks(10);
        let yAxis = d3.axisLeft(y)
                    .ticks(25);
            
        gXAxis.call(xAxis);
        gYAxis.call(yAxis);

        let tooltip = d3.select('.detailedWeatherView').append('div')
                      .attr("class",'detailedWeatherTooltip')
                      .attr('width','200px')
        let content = {
            temperature: tooltip.append('p')
                         .attr('class','temperatureView'),
            precType: tooltip.append('p')
                        .attr('class','precTypeView'),
            weather: tooltip.append('p')
                     .attr('class','weatherView')
        }
        let rects = graph.selectAll('rect')
                    .data(this.details.map((d)=> {return d}));
        rects.attr('width',x.bandwidth)
             .attr('class','bar-rect')
             .attr('height',d=>300-y(d.temp2m))
             .attr('x',(d,i)=>x(d.timepoint))
             .attr('y',(d)=>y(d.temp2m))
        rects.enter()
            .append('rect')
            .attr('class', 'bar-rect')
            .attr('width', x.bandwidth)
            .attr('height', d => 300 - y(d.temp2m))
            .attr('x', (d,i) => x(d.timepoint))
            .attr('y', d => y(d.temp2m))
            .style("fill",d => {return this.temp2Color(d.temp2m)})
            .on("mouseover",(d,i)=>{
                content.temperature.text(i.temp2m);
                content.precType.text(i.prec_type);
                content.weather.text(i.weather);
            });

  
        
    }
    


    render() {
        return (
            <div className = 'detailedWeatherView'>
                <svg ref = {this.state.d3Svg}>

                </svg>
                
            </div>
        )
    }
}

export default DetailedWeather
