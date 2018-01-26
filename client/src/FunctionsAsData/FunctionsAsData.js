import React from 'react';
import * as d3 from 'd3';


const FunctionsAsData = () => {



    const initDiagram = (data, isinit) => {


        const datum = (x) => { // <- B
            return 15 + x * x;
        };

        const newData =  () => { // <- C
            data.push(datum);
            return data;
        };


        const divs = d3.select('#init-diagram')
            .selectAll("div")
            .data(newData);


        divs.enter().append("div").append("span");
        divs.attr("class", "v-bar")
            .style("height", function (d, i) {
                return d(i) + "px"; // <- this calls newData(i)
            })
            .select("span")
            .text(function(d, i){
                return d(i); // <- this calls newData(i)
            });
        divs.exit().remove();

        if (isinit) {
            setInterval(function () {
                if (data.length > 12) {

                    data = [];
                }
                initDiagram(data, false);
            }, 1000);
        }

    };



    return <div id='init-diagram'>{initDiagram([], true)}</div>;

};

export default FunctionsAsData;
