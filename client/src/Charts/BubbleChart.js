import React, { Component } from 'react';
import * as d3 from 'd3';



class BubbleChart extends Component {

    componentDidMount() {

       this.initCoordinateSystem();
    }

    initCoordinateSystem() {

        const b = this.refs.b;

        function bubbleChart() {
            var _chart = {};
            var _width = 600, _height = 300,
                _margins = {top: 30, left: 30, right: 30, bottom: 30},
                _x, _y, _r, // <-A
                _data = [],
                _colors = d3.scaleOrdinal(d3.schemeCategory10),
                _svg,
                _bodyG;
            _chart.render = function () {
                if (!_svg) {
                    _svg = d3.select(b).append("svg")
                        .attr("height", _height)
                        .attr("width", _width);
                    renderAxes(_svg);
                    defineBodyClip(_svg);
                }
                renderBody(_svg);
            };
            function renderAxes(svg) {
                var axesG = svg.append("g")
                    .attr("class", "axes");
                var xAxis = d3.axisBottom()
                    .scale(_x.range([0, quadrantWidth()]));
                var yAxis = d3.axisLeft()
                    .scale(_y.range([quadrantHeight(), 0]));
                axesG.append("g")
                    .attr("class", "axis")
                    .attr("transform", function () {
                        return "translate(" + xStart() + "," + yStart() + ")";
                    })
                    .call(xAxis);
                axesG.append("g")
                    .attr("class", "axis")
                    .attr("transform", function () {
                        return "translate(" + xStart() + "," + yEnd() + ")";
                    })
                    .call(yAxis);
            }
            function defineBodyClip(svg) {
                var padding = 0;
                svg.append("defs")
                    .append("clipPath")
                    .attr("id", "body-clip")
                    .append("rect")
                    .attr("x", 0)
                    .attr("y", 0)
                    .attr("width", quadrantWidth() + 2 * padding)
                    .attr("height", quadrantHeight());
            }
            function renderBody(svg) {
                if (!_bodyG)
                    _bodyG = svg.append("g")
                        .attr("class", "body")
                        .attr("transform", "translate("
                            + xStart()
                            + ","
                            + yEnd() + ")")
                        .attr("clip-path", "url(#body-clip)");
                renderBubbles();
            }
            function renderBubbles() {
                _r.range([0, 50]); // <-B
                _data.forEach(function (list, i) {
                    var bubbles = _bodyG.selectAll("circle._" + i)
                        .data(list);
                    bubbles.enter()
                        .append("circle") // <-C
                        .merge(bubbles)
                        .attr("class", "bubble _" + i)
                        .style("stroke", function (d, j) {
                            return _colors(j);
                        })
                        .style("fill", function (d, j) {
                            return _colors(j);
                        })
                        .transition()
                        .attr("cx", function (d) {
                            return _x(d.x); // <-D
                        })
                        .attr("cy", function (d) {
                            return _y(d.y); // <-E
                        })
                        .attr("r", function (d) {
                            return _r(d.r); // <-F
                        });
                });
            }
            function xStart() {
                return _margins.left;
            }
            function yStart() {
                return _height - _margins.bottom;
            }
            function xEnd() {
                return _width - _margins.right;
            }
            function yEnd() {
                return _margins.top;
            }
            function quadrantWidth() {
                return _width - _margins.left - _margins.right;
            }
            function quadrantHeight() {
                return _height - _margins.top - _margins.bottom;
            }
            _chart.width = function (w) {
                if (!arguments.length) return _width;
                _width = w;
                return _chart;
            };
            _chart.height = function (h) {
                if (!arguments.length) return _height;
                _height = h;
                return _chart;
            };
            _chart.margins = function (m) {
                if (!arguments.length) return _margins;
                _margins = m;
                return _chart;
            };
            _chart.colors = function (c) {
                if (!arguments.length) return _colors;
                _colors = c;
                return _chart;
            };
            _chart.x = function (x) {
                if (!arguments.length) return _x;
                _x = x;
                return _chart;
            };
            _chart.y = function (y) {
                if (!arguments.length) return _y;
                _y = y;
                return _chart;
            };
            _chart.r = function (r) {
                if (!arguments.length) return _r;
                _r = r;
                return _chart;
            };
            _chart.addSeries = function (series) {
                _data.push(series);
                return _chart;
            };
            return _chart;
        }
        function randomData() {
            return Math.random() * 9;
        }
        function update() {
            for (var i = 0; i < data.length; ++i) {
                var series = data[i];
                series.length = 0;
                for (var j = 0; j < numberOfDataPoint; ++j)
                    series.push({x: randomData(), y: randomData(), r: randomData()});
            }
            chart.render();
        }
        var numberOfSeries = 1,
            numberOfDataPoint = 11,
            data = [];
        for (var i = 0; i < numberOfSeries; ++i)
            data.push(d3.range(numberOfDataPoint).map(function (i) {
                return {x: randomData(), y: randomData(), r: randomData()};
            }));
        var chart = bubbleChart()
            .x(d3.scaleLinear().domain([0, 10]))
            .y(d3.scaleLinear().domain([0, 10]))
            .r(d3.scalePow().exponent(2).domain([0, 10]));
        data.forEach(function (series) {
            chart.addSeries(series);
        });
        chart.render();
    }

    render() {
        return <div ref="b" className="coordinate-system"/>;
    }

}

export default BubbleChart;
