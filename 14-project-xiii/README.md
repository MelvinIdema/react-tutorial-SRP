# Project XIII
In dit project heb ik aan de custom hook van Project XI een *ref* toegevoegd.

### De uitwerking
URL: https://melvinidema.github.io/react-tutorial-SRP/13-project-xiii/build/

#### Belangrijke punten:
- Een ref gebruik je zelden, alleen als je document.querySelector() zou gebruiken.
- Een ref slaat een referentie naar het element op in de .current property.

---
## De opdracht
### Map integration with ref
In this project, you will refactor the existing Mapbox map integration by writing your own custom hook.

- Start by replacing the placeholder token in useMapboxMap.js with your own Mapbox token. You can find that token in your Mapbox account or in your own solution from Project XI:
```js
// replace your token
mapboxgl.accessToken = "REPLACE_WITH_YOUR_TOKEN_HERE";
```
- Create a ref for the `<div id="map"></div>`
- Use the useMapboxMap() custom hook and pass to it the ref that you created. Make sure that you pass the ref object rather than ref.current. That's because ref.current will have an undefined value at the beginning, and when you pass the ref object, by the time useLayoutRef is called, the ref.current will be defined because the component would have completed rendering.

Note: in this course, Mapbox is loaded in an awkward way due to a limitation with the Mapbox library when running inside a browser without bundling. Inside create-react-app, you can setup mapbox by:
- installing it with npm install mapbox-gl
- importing it with import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"