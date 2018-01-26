import React, { Component } from 'react';
import * as d3 from 'd3';



class CoordinateSystem extends Component {

    componentDidMount() {

       this.initCoordinateSystem();
    }

    initCoordinateSystem() {

        const g = this.refs.g;

        const height = 500,
            width = 500,
            margin = 25;


        const svg = d3.select(g).append("svg")
            .attr("class", "axis")
            .attr("width", width)
            .attr("height", height);


        function renderXAxis() {
            const axisLength = width - 2 * margin;

            const scale = d3.scaleLinear()
                .domain([0, 100])
                .range([0, axisLength]);

            const xAxis = d3.axisBottom()
                .scale(scale);

            svg.append("g")
                .attr("class", "x-axis")
                .attr("transform", function () { // <-A
                    return "translate(" + margin + "," + (height - margin) + ")";
                })
                .call(xAxis);

            d3.selectAll("g.x-axis g.tick") // <-B
                .append("line") // <-C
                .classed("grid-line", true)
                .attr("x1", 0) // <-D
                .attr("y1", 0)
                .attr("x2", 0)
                .attr("y2", -(height - 2 * margin));  // <-E
        }

        function renderYAxis() {
            const axisLength = height - 2 * margin;

            const scale = d3.scaleLinear()
                .domain([100, 0])
                .range([0, axisLength]);

            const yAxis = d3.axisLeft()
                .scale(scale);
            svg.append("g")
                .attr("class", "y-axis")
                .attr("transform", function () {
                    return "translate(" + margin + "," + margin + ")";
                })
                .call(yAxis);

            d3.selectAll("g.y-axis g.tick")
                .append("line")
                .classed("grid-line", true)
                .attr("x1", 0)
                .attr("y1", 0)
                .attr("x2", axisLength) // <-F
                .attr("y2", 0);
        }

        renderYAxis();
        renderXAxis();
    }

    render() {
        return <div ref="g" className="coordinate-system"/>;
    }

}

export default CoordinateSystem;
