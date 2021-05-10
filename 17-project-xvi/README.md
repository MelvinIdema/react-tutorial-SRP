# Project XVI

In dit project heb ik React Router toegepast en geleerd hoe je React Router kunt gebruiken in je project en hoe je nested routes gebruikt.

### De uitwerking
URL: https://melvinidema.github.io/react-tutorial-SRP/17-project-xvi/build/

Belangrijke punten:
- De Router Switch gaat van boven naar beneden en zal alleen de **eerste** matchende route renderen. Daarom is het belangrijk om een Switch te gebruiken.
- Als je **nested routes** gebruikt, moet je de `exact` attribute van je hoofdroute afhalen. 

---
## De opdracht

### Online store setup
This project builds on top of the previous one (Project XV).

#### The goal of this project is to:

- handle 404 routes
- highlight active page in the `<Nav />` component
- Render the `<ProductDelivery />` as a sub-page for the product details

Keep reading for more specific instructions:

#### Handle 404 routes
We've given you an empty `<NotFound />` component

- When the user hits a 404, they should see an h2 with the text Page not found as well as a paragraph containing The page could not be found
- Optional: Add a link back to the homepage.
- If you'd like to test the 404, you can add a link to a route that does not exist. Otherwise, you can check the result of the tests.
- Highlight active page in `<Nav />`
- We've given you a Nav component with links to 3 different pages. Please use the class nav-active to highlight the current page.
- The Home should only be highlighted when the user is on /
- The About should only be highlighted when the user is on /about. 
- The Products should be highlighted when the user is on any of the following routes: /products, /products/:id, and /products/:id/delivery.

- Render `<ProductDelivery />` as a sub-page for the product details
- When the user visits the product details page, for example, /products/2, there is an existing link to delivery notes. This should take the user to /products/2/delivery and render the `<ProductDelivery />` component.
- Update the existing delivery notes link to have the correct path. Every product should have its own /delivery sub-route.
- Render the `< ProductDelivery />` component when the user lands on that sub-route.

