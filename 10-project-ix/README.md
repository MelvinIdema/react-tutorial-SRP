# Project IX

In dit project heb ik `fetch` gebruikt in combinatie met `useEffect` en conditionele weergave om producten van een externe API te laden.

### De uitwerking
URL: https://melvinidema.github.io/react-tutorial-SRP/10-project-ix/build/

Belangrijke punten:
- Fetch geeft een `Promise` terug en dien je dus met `.then`, `.catch` en `.finally` op te lossen. Of je kunt gebruik maken van een async / await functie.
- Je kunt makkelijk in een Infinite Loop raken met Fetch in een useEffect. Deze **moet** je dus gebruiken met een dependency in je effect.

---
## De opdracht
#### Online store fetch products
The goal of this project is to fetch the products rather than using a hardcoded array.
keep the Browser tab open so you can test the result as you code!
Scroll down for the instructions.

#### StoreFront component
Fetch the list of products from https://react-tutorial-demo.firebaseio.com/products.json
Render a `<Index />` component for every product you get back from the API.
Pass the details of the product as a prop called details
Make sure to handle network failures
Index component
To maintain a good design (and not break the tests), make sure that you do not modify the HTML structure rendered from the Index component.

Render the product's image, title & description.
####Optional
Render the `<Loader />` while the fetch request is loading.