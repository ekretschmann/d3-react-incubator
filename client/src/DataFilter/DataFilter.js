import React, {Component} from 'react';
import * as d3 from 'd3';
import {connect} from 'react-redux';


class DataFilter extends Component {


    selectRetail(state = true) {
        this.props.dispatch({
            type: 'DATA_FILTER_RETAIL',
        });
    }

    selectGas() {
        this.props.dispatch({
            type: 'DATA_FILTER_GAS'
        });
    }

    selectDining() {
        this.props.dispatch({
            type: 'DATA_FILTER_DINING'
        });
    }

    clear() {
        this.props.dispatch({
            type: 'DATA_FILTER_CLEAR'
        });
    }


    componentDidMount() {
        this.data = [ // <-A
            {expense: 10, category: "Retail"},
            {expense: 15, category: "Gas"},
            {expense: 30, category: "Retail"},
            {expense: 50, category: "Dining"},
            {expense: 80, category: "Gas"},
            {expense: 65, category: "Retail"},
            {expense: 55, category: "Gas"},
            {expense: 30, category: "Dining"},
            {expense: 20, category: "Retail"},
            {expense: 10, category: "Dining"},
            {expense: 8, category: "Gas"}
        ];

        this.initDiagram('');

    }

    initDiagram(category) {
        var bars = d3.select("#data-filter-diagram").selectAll("div.h-bar") // <-B
            .data(this.data);
        // Enter
        bars.enter()
            .append("div") // <-C
            .attr("class", "h-bar")
            .style("width", function (d) {
                    return (d.expense * 5) + "px";
                }
            )
            .append("span") // <-D
            .text(function (d) {
                return d.category;
            });
        // Update
        d3.selectAll("div.h-bar").attr("class", "h-bar");
        // Filter
        bars.filter(function (d, i) { // <-E
            return d.category === category;
        })
            .classed("selected", true);


    }

    render() {

        if (this.props.retail) {
            this.initDiagram('Retail');
        }

        if (this.props.gas) {
            this.initDiagram('Gas');
        }

        if (this.props.dining) {
            this.initDiagram('Dining');
        }

        if (this.props.clear) {
            this.initDiagram('');
        }

        return <div>

            <div id='data-filter-diagram'/>
            <div className="control-group">


                <button onClick={this.selectRetail.bind(this)}>
                    Retail
                </button>
                <button onClick={this.selectGas.bind(this)}>
                    Gas
                </button>
                <button onClick={this.selectDining.bind(this)}>
                    Dining
                </button>
                <button onClick={this.clear.bind(this)}>
                    Clear
                </button>
            </div>
        </div>;
    }
}

const mapStateToProps = (state) => {


    return {
        retail: state.data_filter_retail.value,
        gas: state.data_filter_gas.value,
        dining: state.data_filter_dining.value,
        clear: state.data_filter_clear.value
    };

};


export default connect(mapStateToProps)(DataFilter);