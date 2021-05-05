import {useLayoutEffect} from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function useMapboxMap(containerRef) {

    mapboxgl.accessToken = "pk.eyJ1IjoibWVsdmluaWRlbWEiLCJhIjoiY2tpMDQ0eDRiMndmcTJxa3ptNmR3M2R4NiJ9.3AuyIGOz6RGlyXT5iubwog";

    useLayoutEffect(() => {
        new mapboxgl.Map({
            container: containerRef.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center:  [ 12.567898, 55.67583 ],
            zoom: 9
        });
    }, [container]);
}