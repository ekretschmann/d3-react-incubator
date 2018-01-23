import React, { Component } from 'react';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import { fetchData } from '../_actions/histogram';


class Histogram extends Component {

    componentDidMount() {
        //var data = [10, 15, 30, 50, 80, 65, 55, 30, 20, 10, 8]; // <- A
        //this.initHistogram(data);
        //console.log(this.refs);
        //this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');


        const fetchData = this.props.fetchData;

        setInterval(function () { // <- L
            fetchData('http://localhost:3001/data');
        }, 5000);
    }

    initHistogram(data) {
        const g = this.refs.g;


        var bars = d3.select(g).selectAll("div.h-bar") // <- C
            .data(data); // Update <- D

        bars.enter() // <- E
            .append("div") // <- F
            .attr("class", "h-bar") // <- G
            .merge(bars) // Enter + Update <- H
            .style("width", function (d) {
                return (d * 3) + "px"; // <- I
            })
            .text(function (d) {
                return d; // <- J
            });

        bars.exit() // <- K
            .remove();

    }

    render() {

        if (this.props.hasErrored) {
            return <div className="histogram">Sorry! There was an error loading the data</div>;
        }

        if (this.props.isLoading) {
            return <div className="histogram">Loading…</div>;
        }

        this.initHistogram(this.props.data);

        return (

            <div ref="g" className="histogram"/>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        data: state.data,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Histogram);
