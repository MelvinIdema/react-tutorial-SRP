# Project IV

In dit project heb ik een toegankelijk formulier gebouwd en gecontroleerd gemaakt door middel van states. Dit formulier wordt gebruikt om producten toe te voegen aan de bakkerij applicatie.

Ik heb geleerd over toegankelijke formulieren in React, Arrays "immutable" aanpassen en het gebruiken van meerdere states en handlers in een component.


### De uitwerking
URL: https://melvinidema.github.io/react-tutorial-SRP/project-iv/build/

Belangrijke punten:
- Gebruik states alleen aan de ***top*** van je component. React moet dezelfde rangschikking houden om de states en hooks goed te kunnen bijhouden.
- Javascript heeft "pass by reference" (Objects, Arrays, Functions) & "pass by value" (Strings, Booleans, Numbers, etc...). Omdat React een functioneel paradigma heeft betekent dit dat je objecten, functies en arrays ***moet*** kopiëren. Niks mag namelijk direct aangepast worden.
- De HTML value attribute wordt `defaultValue` aangezien je anders een input niet meer kan wijzigen. Je koppelt een value namelijk aan een state.
- Gebruik alleen buttons voor onClick events. En gebruik labels voor je formulieren. Zo worden ze toegankelijk.

---
## De opdracht
The goal of this project is to add items to your online store.
keep checking the Browser tab so you can test the result as you code!
All your work in this project, will be in the StoreFront.js file.

### StoreFront
In the previous project, we hardcoded 2 products. In this one, we'll use state to keep track of them and allow the admin to add new ones using the form.

- Make the products a state variable
- Create controlled components for the name and the description textboxes in the form.
- Make the form accessible
- When the user submits the form, the new Index should be added to the list of products. A product should consist of: {id, name, description}. You can use the the length of the products as the id. (Note: this is only temporary until we learn about fetch and start working with an API)
- When the user submits the form, reset it (by emptying the fields). Note that you cannot (yet) change the focus on submit.
- For each product in your products state, render a <Index /> by passing the relevant details prop, as well as the Delete button.
- Remove (or hide) the <p>Add your first product</p> when there are products.
- Make it possible to delete a product by clicking on the Delete button.

#### Optional
- Add a validation message in `<div className="validation-message"></div>` when the name or the description are empty.
- Do not allow adding a product if one of the fields are missing.