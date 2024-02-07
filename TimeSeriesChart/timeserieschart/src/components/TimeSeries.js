import React from 'react'
import * as d3 from 'd3';
import { useEffect, useState } from 'react';
const TimeSeries = () => {

    let csvURL = "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv"

    // const {width, height } = props;
    const height = 400;
    const width = 400;

    const [data, setData] = useState([]);

    useEffect(() => {
        if (data.length > 0) {
            drawChart();
        } else {
            getURLData();
        }
    }, [data])

    // gets csv data from a random csv I found
    // ex. [{date: '2021-12-12', value: 1000}]
    const getURLData = async () => {
        let tempData = [];
        await d3.csv(csvURL,
            (() => { }),
            function (d) {
                //console.log(d);
                tempData.push({ date: d3.timeParse("%Y-%m-%d")(d.date), value: parseFloat(d.value) })
            }

        )
        setData(tempData);
    }

    const drawChart = () => {

        // establish margins
        const margin = { top: 10, right: 50, bottom: 50, left: 50 };

        // create the chart area
        const svg = d3
            .select('#time_series')
            .append('svg')
            .attr("viewBox", [0, 0, width, height])
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .attr("style", "max-width: 100%; height: auto;")
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`)
            .call(zoom);;

       

        // Add X axis --> it is a date format
        var x = d3.scaleTime()
            .domain(d3.extent(data, function (d) { return d.date; }))
            // .attr("transform", `translate(0,${height - margin.bottom})`)
            .range([0, width]);

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));


        // Add Y axis
        var y = d3.scaleLinear()
            .domain([0, d3.max(data, function (d) { return +d.value; })])
            // .attr("transform", `translate(${margin.left},0)`)
            .range([height, 0]);
            
        svg.append("g")
            .call(d3.axisLeft(y))
            .call(g => g.select(".domain").remove());

        // set line coordinates
        const line = d3.line()
            .x(function (d) { return x(d.date) })
            .y(function (d) { return y(d.value) })

        // Add the line
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", line)

            function zoom(svg) {
                const extent = [[margin.left, margin.top], [width - margin.right, height - margin.top]];
            
                svg.call(d3.zoom()
                    .scaleExtent([0.5,5])
                    .translateExtent(extent)
                    .extent(extent)
                    .on("zoom", zoomed));
            
                function zoomed(event) {
                  x.range([margin.left, width - margin.right].map(d => event.transform.applyX(d)));
                  svg.selectAll(".bars rect").attr("x", d => x(d.letter)).attr("width", x.bandwidth());
                  svg.selectAll(".x-axis").call(x);
                }
              }
    }

    return (
        <div>
            <h4> Time Series - http CSV response -
                <a href='https://www.d3-graph-gallery.com/graph/line_basic.html'>Original Tutorial</a>
            </h4>
            <div id='time_series' />
        </div>
    )


}

export default TimeSeries