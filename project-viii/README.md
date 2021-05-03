# Project VIII

In dit project heb ik het hoofdproject aangevuld met blijvende states. 

Ik heb geleerd over om items toe te voegen aan de localStorage en weer op te halen door middel van parseInt, `JSON.parse` en `JSON.stringify`

### De uitwerking
URL: https://melvinidema.github.io/react-tutorial-SRP/project-viii/build/

Belangrijke punten:
- Je kunt de localStorage API gebruiken om states blijvend op te slaan. De localStorage API slaat alles op in 'string' format en dien je dus te 'parsen' voordat je het kunt gebruiken.
- Nummers: `parseInt()`
- Booleans: `localStorage.getItem("boolean") === "true"`
- Arrays & Objects: `JSON.parse()`

---
## De opdracht
#### Optimizations
- Make sure you've applied the necessary optimizations for storing the products to localStorage. We don't test for this, but you can check the hints and/or the solution when you're done.
  
- Make sure you've applied the necessary optimizations for restoring the products from localStorage. We also don't test for this, but you can check the hints and/or the solution when you're done.
  
- Note: if you accidentally save a value other than an array in localStorage (under the key "products") and you're already restoring the products from localStorage then the challenge will most likely fail. You will have to manually set the localStorage entry to an empty array using: localStorage.setItem("products", "[]") once at the top of the component. This is not a limitation of React Tutorial, this would happen on your local machine as well.
#### Optional
- When there are no products, the page title should be: No products.
  
- When there is one product, the page title should be: 1 product.
  
- When there are 2 or more products, the page title should be: X products where X is the number of products.

