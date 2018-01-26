import React, {Component} from 'react';
import * as d3 from 'd3';
import {connect} from 'react-redux';


class DataFilter extends Component {


    selectCategory = () => {
        this.props.dispatch({
            type: 'DATA_SORT_CATEGORY',
        });
    };

    selectExpense = () => {
        this.props.dispatch({
            type: 'DATA_SORT_EXPENSE'
        });
    };


    clear = () => {
        this.props.dispatch({
            type: 'DATA_SORT_CLEAR'
        });
    };

    compareByExpense = (a, b) => {  // <-F
        return a.expense < b.expense?-1:1;
    };

    compareByCategory = (a, b) => {  // <-G
        return a.category < b.category?-1:1;
    };

    componentDidMount = () => {
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

    };

    initDiagram = (comparator) => {
        var bars = d3.select('#data-sort-diagram').selectAll("div.h-bar") // <-B
            .data(this.data);
        // Enter
        bars.enter().append("div") // <-C
            .attr("class", "h-bar")
            .append("span");
        // Update
        d3.selectAll("div.h-bar") // <-D
            .style("width", function (d) {
                return (d.expense * 5) + "px";
            })
            .select("span")
            .text(function (d) {
                return d.category;
            });
        // Sort
        if(comparator)
            bars.sort(comparator); // <-E

    };

    render = () => {

        if (this.props.expense) {
            this.initDiagram(this.compareByExpense);
        }

        if (this.props.category) {
            this.initDiagram(this.compareByCategory);
        }


        if (this.props.clear) {
            this.initDiagram();
        }

        return <div>

            <div id='data-sort-diagram'/>
            <div className="control-group">

                <button onClick={this.selectExpense.bind(this)}>
                    Sort by Expense
                </button>
                <button onClick={this.selectCategory.bind(this)}>
                    Sort by Category
                </button>
                <button onClick={this.clear.bind(this)}>
                    Reset
                </button>


            </div>
        </div>;
    }
}

const mapStateToProps = (state) => {


    return {
        expense: state.data_sort_expense.value,
        category: state.data_sort_category.value,
        clear: state.data_sort_clear.value
    };

};


export default connect(mapStateToProps)(DataFilter);