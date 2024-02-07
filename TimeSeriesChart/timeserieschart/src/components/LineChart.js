import * as d3 from "d3"; // we will need d3.js
import { useState, useEffect, useRef } from "react";
export const LineChart = () => {
    let csvURL = "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv"

    // const {width, height } = props;
    let height = 400;
    let width = 400;
    const [data, setData] = useState([]);
    useEffect(() => {
        if (data.length > 0) {
            drawChart();
        } else {
            getURLData();
        }
    }, [data])
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

console.log(data)
    const drawChart = () => {
        console.log("draw")

        const margin = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 45
        };

        width = 400 - margin.left - margin.right;
        height = 200 - margin.top - margin.bottom;

        var x = d3.scaleTime()
            .domain(d3.extent(data, function (d) {
                return d.date;
            }))
            .range([0, width]);

        var y = d3.scaleLinear()
            .domain(d3.extent(data, function (d) {
                return d.value;
            }))
            .range([height, 0]);

        var line = d3.line()
            .x(function (d) {
                return x(d.date);
            })
            .y(function (d) {
                return y(d.value);
            });
        var zoom = d3.zoom()
        .scaleExtent([0.5, 10])
        .translateExtent([[0, 0], [width, height]])
        .on('zoom', zoomed);

        let svg = d3.select('#chart')
            .append("svg")
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .call(zoom);

        svg.append("rect")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "plot");
        var make_x_axis = function () {
            return d3.axisBottom();
        };

        var make_y_axis = function () {
            return d3.axisLeft(y);
        };

        var xAxis = d3.axisBottom(x);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0, " + height + ")")
            .call(xAxis);

        var yAxis = d3.axisLeft(y);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        svg.append("g")
            .attr("class", "x grid")
            .attr("transform", "translate(0," + height + ")");

        svg.append("g")
            .attr("class", "y grid");

        var clip = svg.append("clipPath")
            .attr("id", "clip")
            .append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", width)
            .attr("height", height);

        var chartBody = svg.append("g")
            .attr("clip-path", "url(#clip)");

        chartBody.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line);

        function zoomed() {
            // console.log(d3.event.translate);
            // console.log(d3.event.scale);
            svg.select(".x.axis").call(xAxis);
            svg.select(".y.axis").call(yAxis);
            // svg.select(".x.grid")
            //     .call(make_x_axis()
            //         .tickSize(-height, 0, 0)
            //         .tickFormat(""));
            // svg.select(".y.grid")
            //     .call(make_y_axis()
            //         .tickSize(-width, 0, 0)
            //         .tickFormat(""));
            svg.select(".line")
                .attr("class", "line")
                .attr("d", line);
            console.log("kk")
        }
    }
    return (
        <div>
            <div id="chart"></div>
        </div>
    );
};