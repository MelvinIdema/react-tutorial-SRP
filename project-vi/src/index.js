import React, {useState, useLayoutEffect} from "react";
import {render} from "react-dom";

import mapboxgl from "mapbox-gl/dist/mapbox-gl";

import "./index.css";

function App() {
    const [random, setRandom] = useState(Math.random());

    mapboxgl.accessToken = "pk.eyJ1IjoibWVsdmluaWRlbWEiLCJhIjoiY2tpMDQ0eDRiMndmcTJxa3ptNmR3M2R4NiJ9.3AuyIGOz6RGlyXT5iubwog";

    useLayoutEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [12.567898, 55.675830],
            zoom: 9,
        });
    }, [])

    return <>
        <button id="re-render" onClick={() => setRandom(Math.random())}>Re-render</button>
        <div id="map"></div>
    </>;
}

render(<App />, document.querySelector("#react-root"));