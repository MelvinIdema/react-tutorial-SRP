import React, {useState} from "react";
import {render} from "react-dom";

import useMapboxMap from "./useMapboxMap.js";

import "./index.css";


function App() {
    const [random, setRandom] = useState(Math.random());
    console.log(random) // So no warnings are shown on compilation
    useMapboxMap("map");

    return <>
        <button id="re-render" onClick={() => setRandom(Math.random())}>Re-render</button>
        <div id="map"></div>
    </>;
}

render(<App />, document.querySelector("#react-root"));