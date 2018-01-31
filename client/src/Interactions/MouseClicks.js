import React, { Component } from 'react';
import * as d3 from 'd3';



class MouseClicks extends Component {

    componentDidMount() {

       this.initCoordinateSystem();
    }

    initCoordinateSystem() {

        const g = this.refs.g;

        var r = 400;
        var svg = d3.select(g)
            .append("svg");
        var positionLabel = svg.append("text")
            .attr("x", 10)
            .attr("y", 30);
        svg.on("mousemove", function () { //<-A
            printPosition();
        });

        function printPosition() { //<-B
            var position = d3.mouse(svg.node()); //<-C
            positionLabel.text(position);
        }
        svg.on("click", function () { //<-D
            for (var i = 1; i < 3; ++i) {
                var position = d3.mouse(svg.node());
                var circle = svg.append("circle")
                    .attr("cx", position[0])
                    .attr("cy", position[1])
                    .attr("r", 0)
                    .style("stroke-width", 5 / (i))
                    .transition()
                    .delay(Math.pow(i, 2.5) * 50)
                    .duration(2000)
                    .ease(d3.easeQuadIn)
                    .attr("r", r)
                    .style("stroke-opacity", 0)
                    .on("end", function () {
                        d3.select(this).remove();
                    });
            }
        });
    }

    render() {
        return <div ref="g" className="coordinate-system"/>;
    }

}

export default MouseClicks;
