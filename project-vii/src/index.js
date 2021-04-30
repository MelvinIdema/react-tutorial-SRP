import React, {useState, useLayoutEffect} from "react";
import {render} from "react-dom";

import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import "./index.css";

function App() {
    const [marker, setMarker] = useState(null);
    const stores = {
        central: [12.567898, 55.67583],
        norrebro: [12.553806, 55.699299],
        airport: [12.650784, 55.618042]
    }

    mapboxgl.accessToken = "pk.eyJ1IjoibWVsdmluaWRlbWEiLCJhIjoiY2tpMDQ0eDRiMndmcTJxa3ptNmR3M2R4NiJ9.3AuyIGOz6RGlyXT5iubwog";

    useLayoutEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            center:  [ 12.567898, 55.67583 ],
            zoom: 9
        });

        const theMarker = new mapboxgl.Marker()
            .setLngLat(stores.central)
            .addTo(map);

        setMarker(theMarker);
        // eslint-disable-next-line
    }, []);

    function handleStoreChange(value) {
        marker.setLngLat(stores[value]);
    }

    return <>
        <div className="map-overlay">
            <h3>Choose store: </h3>
            <select onChange={e => handleStoreChange(e.target.value)}>
                <option value="central">Central station</option>
                <option value="norrebro">Norrebro street</option>
                <option value="airport">CPH Airport</option>
            </select>
        </div>
        <div id="map"></div>
    </>;
}

render(<App />, document.querySelector("#react-root"));