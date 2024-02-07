import React, { useState } from "react";
import "../App.css";
import ZoomableLineChart from "./ZoomableLineChart.js";
const FinalZoomLine = () => {
    const [data, setData] = useState(
        Array.from({ length: 50 }, () => Math.round(Math.random() * 100))
    );
console.log(data)
    return (
        <React.Fragment>
            <h2>Zoomable Line Chart with D3 </h2>
            <ZoomableLineChart data={data} />
            <button
                onClick={() => setData([...data, Math.round(Math.random() * 100)])}
            >
                Add data
            </button>
        </React.Fragment>
    );
}



export default FinalZoomLine