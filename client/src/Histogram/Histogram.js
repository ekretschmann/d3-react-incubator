import React, { Component } from 'react';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import { poll } from '../_actions/poller';
import { random_data_1_poll } from '../_actions/random_data_1';


class Histogram extends Component {

    componentDidMount() {
        this.props.poll(this.props.url, this.props.loadingAction, this.props.errorAction, this.props.updateAction);
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

const mapStateToProps = (state) => {


    return {
        updated: state.random_data_1_updated,
        errored: state.random_data_1_errored,
        loading: state.random_data_1_loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        random_data_1_poll: (url) => dispatch(random_data_1_poll(url)),
        poll: (url, loading, error, update) => dispatch(poll(url, loading, error, update))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Histogram);
