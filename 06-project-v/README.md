# Project V

In dit project heb ik het vorige project *gerefactored* naar een betere variant. Door wat we in de vorige hoofdstukken geleerd hebben toe te passen. De StoreFront werd namelijk te groot, maar we wisten nog niet hoe je deze kan opdelen. Nu wel!

Ik heb geleerd hoe je van een grote component kleinere kunt maken, hoe je je grote component als common ancestor kunt houden en states en functies kunt doorpassen aan je stateless componenten met props. En de beste manier om deze props een naam te geven. 

### De uitwerking
URL: https://melvinidema.github.io/react-tutorial-SRP/06-project-v/build/

Belangrijke punten:
- Een React component kan ***Stateless*** en ***Stateful*** zijn. Stateless componenten beheren hun states niet zelf, maar krijgen die alleen van een *common ancestor* doorgegeven. Dit maakt je code makkelijker te onderhouden en te testen. Immers: Als je een component dezelfde data geeft, zal altijd dezelfde uitkomst moeten voortvloeien. Dit bekent niet dat ze niet interactief kunnen zijn. Door je eventHandler door te geven als *prop* kun je events naar boven sturen.
- Een component kan klein beginnen en langzaam steeds groter groeien. Als een component te groot wordt, of meer dan 1 taak krijgt, dien je deze op te delen in kleinere componenten.

---
## De opdracht
### Refactor Online Store Admin
The goal of this project is to refactor the code from Project IV.

Start by refactoring the `<ul className="store-front">...</ul>` into the `<ProductsList />` component. Make sure it works before proceeding.
Refactor the form into its own `<AddProductForm />` component.