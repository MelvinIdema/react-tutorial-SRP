# Project XII

In dit project heb ik dezelfde uitdagingen van Project IX en Project X gedaan, maar dit keer met de hulp van een zelfgeschreven `useFetch` custom hook. Dit maakt de code meer overzichtelijk.


Ik heb geleerd hoe je custom hooks kunt schrijven met *states*; hoe je functies van een custom hook op twee manieren kunt returnen: met een object of met een array.

Vervolgens heb ik dit toegepast door zelf een useFetch hook te schrijven en deze gebruikt om de producten van een API op te halen. En de producten naar een API toe te *posten* in het admin gedeelte.

### De uitwerking
#### Fetch Products
URL: https://melvinidema.github.io/react-tutorial-SRP/13-project-xii/get-products/build/
#### Post Products
URL: https://melvinidema.github.io/react-tutorial-SRP/13-project-xii/post-products/build/ 

#### Belangrijke punten:
- Bij meer dan twee functies is het beter om een object te returnen, omdat dan de order niet meer uitmaakt. In een array is de order heel belangrijk:
    ```js
        // Goed
        const [item, setItem] = useState("");
        // Fout
        const [setItem, item] = useState("");
    ```

---
## De opdracht
### Online store fetch products
The goal of this project is to fetch the products rather than using a hardcoded array (preferably using the custom useFech hook).
keep the Browser tab open so you can test the result as you code!
Scroll down for the instructions.

#### StoreFront component
- Fetch the list of products from the API:
    - Base URL: https://react-tutorial-demo.firebaseio.com/
    - Endpoint: products.json

- Render a `<Index />` component for every product you get back from the API.

#### Optional
Render the `<Loader />` while the fetch request is loading using the loading state from the useFetch hook.

### Post Online Store Admin
The goal of this project is to post the items added by the admin to the database by sending them using a fetch request to a demo API (preferably using the useFetch custom hook).

Here are the instructions for the demo API:
- Base URL: https://api.learnjavascript.online/demo/react/admin/ Endpoint: products
- Method: POST
- Data: a JSON object containing the name (string) and the description (string)