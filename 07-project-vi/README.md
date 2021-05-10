# Project VI

In dit project heb ik een map van MapBoxGL in de pagina geëmbed. Hier heb ik geleerd over een goede useCase voor useLayoutEffect. Vervolgens heb ik dit toegepast in door MapBoxGL te embedden in een React Applicatie.

### De uitwerking
URL: https://melvinidema.github.io/react-tutorial-SRP/07-project-vi/build/

Belangrijke punten:
- State updates met de useState hook zijn asynchronous. Ze worden gebundeld en in een keer uitgevoerd door React. Daarom kunnen twee op een volgende state updates dezelfde uitkomst hebben:
    ```js
    setCount(count +1); // 1
    setCount(count +1); // 1?
    ```
  Voor dit "probleem" (feature) is een oplossing bedacht. Door functionele state updates, waar je de state meegeeft als parameter:
  ```js
  setCount(prevCount => prevCount + 1); // 1
  setCount(prevCount => prevCount + 1); // 2 :D
  ```
- Als je normale Javascript wilt uitvoeren in een React component, kun je dat doen met de `useEffect` hook.
- Sommige effecten hebben een cleanup nodig. Bijvoorbeeld een interval. Anders krijg je memore leaks. Dit doe je door iets te returnen van je useEffect functie.
- Een useEffect kan ook alleen uitgevoerd worden bij een state update. Door een array als tweede parameter mee te geven met daarin de "dependencies".
- Bij een effect die iets doet met de layout van je pagina, krijg je flikkeringen. Om dit te voorkomen is de `useLayoutEffect` hook ontwikkeld. Die eerder uitgevoerd wordt dan dat er getekent wordt op je scherm. 
---
## De opdracht
In this project, you will integrate a mapbox map inside a React component.

- Start by creating a free mapbox account. You do NOT need to add any payment details.
- Open your mapbox account and scroll down until you find your own unique token, under default public token. You will need this in a second.
- Set your mapbox token, here's how:
  `mapboxgl.accessToken = "REPLACE_WITH_YOUR_TOKEN_HERE";`
Add this line inside your React component to identify yourself to mapbox.
- We have a `<div id="map"></div>`. Here's the JavaScript code you need to instantiate the map:

```js
const map = new mapboxgl.Map({
container: 'map', // matches <div id="map" />
style: 'mapbox://styles/mapbox/dark-v10', // sets the dark mode
center: [5, 10], // Sets the center of the map (long, lat)
zoom: 10
});
```
Integrate the map inside your component, keeping in mind that you should only run this instantiation code once after the component has rendered.
We have given you a re-render button so you can re-render the component. When the component re-renders, you should not re-initialize the map!
- Center the map around Copenhagen which has a latitude of 55.675830 and longitude of 12.567898
- Set the zoom level to 9

Note: in this course, mapbox is loaded in an awkward way due to a limitation with the mapbox library when running inside a browser without bundling. Inside create-react-app, you can setup mapbox by:

installing it with `npm install mapbox-gl`
importing it with `import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"`
