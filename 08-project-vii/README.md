# Project VII

In dit project heb ik verder gebouwd op project-vi door een dropdown toe te voegen die een marker op de map plaats gebaseerd op een locatie. 
Ik heb geleerd over conditioneel states aanpassen in een effect en het voorkomen van een infinite loop.

### De uitwerking
URL: https://melvinidema.github.io/react-tutorial-SRP/08-project-vii/build/

Belangrijke punten:
- Wanneer je state veranderd wordt je component bijgewerkt en je effecten weer opnieuw gerund. Als je state in een effect veranderd, kan dit ervoor zorgen dat het effect oneindig lang runt. Dit heet een "infinite-loop" en moet je voorkomen door effect dependencies te gebruiken.

---
## De opdracht
### Store locator
In this project, you will show a marker for the store that the user chooses from the dropdown!

Start by replacing the access token with your own access token. You can get it from the previous project or your mapbox account.
Create a marker that has the same position as the map's center. That's longitude, latitude: 12.567898, 55.67583. Here's how you create a marker in JavaScript:
```js
const marker = new mapboxgl.Marker()
.setLngLat([0, 0]) //longitude and latitude
.addTo(map);
```
Handle the change event on the dropdown. We've already given you the 3 locations (longitude, latitude) for the 3 stores in the stores variable. Before proceeding to the next step, try to console.log the location of the store you select from the dropdown. Check the hints if you need help.

Change the location of the marker when the user selects a location from the dropdown. Here's how you change the location of an existing marker:

`marker.setLngLat([5, 5]); //new longitude, new latitude`

You will need to have access to the marker variable inside your onChange callback for it to work.

Note: in this course, mapbox is loaded in an awkward way due to a limitation with the mapbox library when running inside a browser without bundling. Inside create-react-app, you can setup mapbox by:

installing it with `npm install mapbox-gl`

importing it with `import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"`

