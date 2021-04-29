# Project Naam

In dit project heb ik de UI-kit van het vorige project verbeterd.
Ik heb geleerd dat je functies puur moet houden. Ze mogen dus geen "side effects" hebben. Props mogen niet aangepast worden. Maar je moet overal iets nieuws voor maken. De NPM Package `clsx` die het makkelijker maakt dynamische classes aan je React componenten toe te voegen. Hoe je door de ternary operator (of de nullish operator) een default attribute value kan toewijzen. En de ES6 spread operator om dynamische attributen toe te voegen. Dit heb ik toegepast in de code de oude UI-Kit.

### De uitwerking
URL: https://melvinidema.github.io/react-tutorial-SRP/project-ii/build

Belangrijke punten:
- De Nullish operator is nieuw in Javascript en vervangt een langere variant:
```jsx
// Oud
const type = !type ? 'default' : type;
// Nieuw
const type = type ?? 'default';
```
- Functies moeten puur zijn in React. Omdat React een functioneel paradigma aanhoudt. Dit bekent dat je props niet direct mag aanpassen. Maar een nieuwe variable moet aanmaken met de aangepaste prop.

---
## De opdracht

#### Improved UI Kit
The aim of this project is to improve your UI Kit.
We've already given you the solution of Project I that you will improve so that:

- All Components are customizable from the outside (they accept any attribute).
- All Components will keep their default classNames (for example ui-container for the Container Component) however you should still be able to add a className on the Component which will be added next to the default className. Here are the default classes:
- Container: ui-container
- Input: ui-textfield
- Link: ui-link
- Button: ui-button

#### Examples:
- Example #1: `<Container className="main"><Container>` will render `<div className="ui-container main"></div>`
- Example #2: `<Container className="store"><Container>` will render `<div className="ui-container store"></div>`
  Notice how you can use the Container with your own class and it will end up using that class as well as the default "ui-container". This behaviour should be the same for all components.

#### Note
The `<Input />` should still default the type to "text".
You do NOT need to import the index.css as it is automatically injected in the page.
