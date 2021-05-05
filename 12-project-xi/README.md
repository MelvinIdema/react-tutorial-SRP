# Project XI

In dit project heb ik het MapboxGL project uit Project VII omgezet naar een *Custom Hook*.


### De uitwerking
URL: https://melvinidema.github.io/react-tutorial-SRP/12-project-xi/build/

Belangrijke punten:
- Naast de ingebouwde hooks van React kun je ook je eigen custom hooks bouwen. Deze beginnen altijd met `use`. Zoals: `useMapboxMap` of `useWelcomeGreeting`. Hun bestandsnamen dus ook.


---
## De opdracht

#### Refactoring map integration
In this project, you will refactor the existing Mapbox map integration by writing your own custom hook.

Start by replacing the placeholder token with your own Mapbox token. You can find that token in your Mapbox account or in your own solution from Project VI:
```js
// replace your token
mapboxgl.accessToken = "REPLACE_WITH_YOUR_TOKEN_HERE";
```

- Create a custom hook called useMapboxMap which expects one parameter called container.
- Move all the Mapbox code inside the new custom hook
- Do not hardcode container: "map". Instead, the value of the container should be received as the parameter of this custom hook.
- Use this custom hook in the App component as following: useMapboxMap("map") where "map" is the container where the map should be rendered.

Note: in this course, Mapbox is loaded in an awkward way due to a limitation with the Mapbox library when running inside a browser without bundling. Inside create-react-app, you can setup mapbox by:

- installing it with `npm install mapbox-gl`
- importing it with `import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"`