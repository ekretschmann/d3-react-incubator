import React, { Component } from 'react';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import { poll } from '../_actions/poller';


class Histogram extends Component {


    componentDidMount() {

        this.props.poll(
            this.props.url,
            this.props.loadingAction,
            this.props.errorAction,
            this.props.updateAction,
            this.props.interval
        );
    }

    initHistogram(data) {


        const g = this.refs.g;


        const bars = d3.select(g).selectAll("div.h-bar") // <- C
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

      // console.log(this.props);

        if (this.props.errored) {
            return <div className="histogram">Sorry! There was an error loading the data</div>;
        }

        if (this.props.loading) {
            return <div className="histogram">Loading…</div>;
        }

        if (this.props.updated && this.props.updated.items) {
            this.initHistogram(this.props.updated.items);
        }

        return <div ref="g" className="histogram"/>;
    }
}

const mapStateToProps = (state, params) => {

    let updatedMapping = undefined;
    let loadingMapping = undefined;
    let errorMapping = undefined;

    for (let key of Object.keys(state)) {
        if (state[key].type === params.updateAction().type) {
            updatedMapping = state[key];
        }
    }

    for (let key of Object.keys(state)) {
        if (state[key].type === params.loadingAction().type) {
            loadingMapping = state[key].isLoading;
        }
    }

    for (let key of Object.keys(state)) {
        if (state[key].type === params.errorAction().type) {

            errorMapping = state[key].hasErrored;
        }
    }

    return {
        updated: updatedMapping,
        errored: errorMapping,
        loading: loadingMapping
    };

};

const mapDispatchToProps = (dispatch) => {
    return {
        poll: (url, loading, error, update, interval) => dispatch(poll(url, loading, error, update, interval))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Histogram);
