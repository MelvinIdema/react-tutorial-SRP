# Project Naam

In dit project heb ik een start gemaakt met het eind project van de cursus: Een supermarkt app met Stripe integratie. Omdat ik samen met Arthur heb afgesproken om mijn eigen draai te geven aan dit project, heb ik deze aangepast naar een bakkerij.

Ik heb geleerd over Array destructuring, React Hooks (de `useState` hook), event handlers en de naming conventions hiervan. `handleSubjectEvent`. Zoals: `handleButtonClick`. Hoe je conditoneel een state wijzigt en hoe je conditioneel een component rendered.

Vervolgens heb ik dit toegepast op de eerste beetjes van de bakkerij app. Waarbij conditioneel een login knop en een loguit knop getoond wordt. Met een aantal producten. 

Probleem waar ik zelf tegenaan liep:
Bij het inladen van je eigen plaatjes dien je deze te importeren als volgt:
```js
import image from './path/to/image';
```
Dit wist ik van te voren niet. 

### Bronnen
- Icons: https://freebiesupply.com/free-vector/free-bakery-icons/

### De uitwerking
URL: https://melvinidema.github.io/react-tutorial-SRP/project-iii/build/

Belangrijke punten:
- Een React Hook mag je alleen gebruiken in de bovenste closure. Niet in een if statement, een handler of iets dergelijks. Anders krijg je problemen met de innerste werking van React. 

---
## De opdracht

#### My first Online Store
The goal is to create your first online store.
keep the Browser tab open so you can test the result as you code!
Follow the instructions step by step, make sure they're completed before moving on to the next section.

#### App component
Start by rendering the Please Login `h2` and the Login `button`
When the user clicks on the Login button, then you should render the StoreFront component.
When user is logged in, you should render the StoreFront Component as well as the logout button.
StoreFront component
Because we haven't learned how to get data from an API yet, we have hardcoded 2 products in the products array.

In StoreFront, render 2 empty `<Product />` Components. (We haven't learned how to iterate yet, so simply write the `<Product />` twice).
Each Product component should receive only one prop called details which contains one of the hardcoded product details. Give the first `<Product />` the first index of the array, and the second `<Product />` the 2nd index of the array.

#### Product component
To maintain a good design (and not break the tests), make sure that you do not modify the HTML structure rendered from the Product component.
Also, if it becomes annoying to have to re-login everytime, feel free to return `<StoreFront />` immediately from the `<App />` component, until you've got all the other tests passing.

Render the product's image, title & description. You should now see 2 different products with 2 different data.
When the user clicks on + or - it should increment a counter which keeps track of how many items the user wants to order.
Do not allow the counter to go below 0 (you cannot order -1 items).
When the counter is 0, disable the - button and hide the counter. So the counter will only show up when it's at 1 or above, and disappear if it's 0.

