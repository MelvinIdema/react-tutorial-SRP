# Project XV

In dit project heb ik React Router (*react-router-dom*) toegepast om een details pagina te maken voor de producten. De pagina maakt gebruik van de *useFetch* custom hook die ik eerder geschreven hebom de product details uit een externe API op te halen.

### De uitwerking
URL: https://melvinidema.github.io/react-tutorial-SRP/16-project-xv/build/

Belangrijke punten:
- Je gehele app moet gewikkeld in een <BrowserRouter> zijn om de router te laten werken.
- In plaats van een `<a>` element **moet** je een `<Link>` gebruiken. Zodoende kan React Router de link opvangen en zorgen dat de browser niet daadwerkelijk naar die pagina gaat.
- In een `<Router />` component moet je de exact prop meegeven. Anders gaan er dingen mis:
    ```jsx
        <Router exact path="/"> Je component </Router>
    ```

---
## De opdracht
### Index details page
The goal of this project is to be able to click on a product which will will take us to a product details page.
For example, clicking on the Cheese product will take the user to /products/1.
The user can then copy this URL and send it to a friend who will land on the the product details of the Cheese product.

For that, you need to implement the `<ProductDetails />` component to fetch the product details of this particular product.

The URL endpoints that you will use are GET requests:
- Base URL: https://react-tutorial-demo.firebaseio.com/ Endpoint: productdetails/id:id.json

Example endpoints:

- https://react-tutorial-demo.firebaseio.com/productdetails/id1.json
- https://react-tutorial-demo.firebaseio.com/productdetails/id2.json
- https://react-tutorial-demo.firebaseio.com/productdetails/id3.json

You have to replace the number 1, 2, or 3 with the id of the product that the user is visiting.

Note: the id before id1, id2, and id3 should NOT be removed. Also, this endpoint is different than the one that's being used in the <StoreFront /> component.
keep the Browser tab open so you can test the result as you code!
Scroll down for the instructions.

### App component
- Start by rendering the `<StoreFront />` component for the home page (/)
- Then render the `<ProductDetails />` component for whenever the user visits a product page such as /products/1, /products/2, /products/3, etc.

### Index component
- Wrap the `<div className="product" />` with a link that takes the user to the corresponding product details page. For example, when the user clicks on the product with id 1, they should be redirected to /products/1.
ProductDetails component
- Link the back to home such that it takes you back to the homepage.
- Read the id that this component receives from the URL. Log it to the console and make sure it's working by trying it in the Browser tab.
- Setup the useFetch custom hook with the Base URL.
- Load the product details from the endpoint given above. Make sure to replace the :id with the current id that the user is browsing.
- Update the state such that the product becomes visible.

