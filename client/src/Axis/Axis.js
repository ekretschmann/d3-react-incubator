import React, { Component } from 'react';
import * as d3 from 'd3';



class Axis extends Component {

    //constructor(props) {
    //    super(props);
    //}

    componentDidMount() {
        this.renderAxis();
    }

    renderAxis() {
        const scale = d3
            .scaleLinear()
            .domain(JSON.parse(this.props.domain))
            .range(JSON.parse(this.props.range));

        const axis = d3
            .axisBottom(scale);


        d3.select(this.refs.g)
            .call(axis);

    }

    render() {

        const transform = `translate(${this.props.x}, ${this.props.y})`;
        return (

            <g transform={transform} ref="g"/>
        );
    }
}

export default Axis;
