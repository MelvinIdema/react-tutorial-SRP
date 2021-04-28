# React Intro
React is een Javascript library onderhouden door Facebook. Gemaakt om User Interfaces te onderhouden.

Het is **alleen** verantwoordelijk voor de "view layer" van een applicatie, het tonen en updaten van de User Interface. 

React komt het best tot haar recht bij midden tot grote applicaties met meerdere teamleden. 

### React is *geen* framework
Het verschil tussen een library en een framework is dat een library alleen helpt op 1 gebied van je applicatie. Terwijl een framework op meerdere gebieden helpt. Zoals bij je CSS.

## Install & Setup
React werkt met een package manager. In deze cursus wordt ***NPM*** gebruikt als package manager.
Omdat ik de projecten lokaal als deliverables op wil leveren. Ga ik gebruik maken van de [create-react-app](https://github.com/facebook/create-react-app) package. Die [Babel](https://babeljs.io/) en [Webpack](https://webpack.js.org/) voorgeconfigureerd heeft. Compilers en Build tools valle buiten de scope van deze cursus.

### React importeren
React moet geïmporteerd worden in elk Javascript bestand (red. voor versie 17). Dit doe je als volgt:
```js
import React from 'react';
```
Je hebt twee manieren van importeren:
- Een *bare import*:
    - Deze worden geïmporteerd zonder `./` en worden door een *bundler* als Webpack uit `node_modules` gehaald.
- Een *file import*
    - Deze worden geïmporteerd met `./*[.js]?` en zijn relatief aan het bestand.
    
### Het React object
Wanneer je React importeert krijg je een React object terug met methods en properties. Zoals de `React.version` property.

---
##### Baby Steps
Complete the getReactVersion method such that it returns the current installed version of React.
```diff
+ import React from 'react';

function getReactVersion() {
+    return React.version
}

// sample usage (do not modify)
console.log(getReactVersion());
```

### Wat kost een import
Elke module die je importeert kost een aantal kilobytes die mee wordt gebundeld in een groot javascript bestand. Dit moet je zo klein mogelijk houden.

## Document.createElement
`Document.createElement` is een browser API waarmee je programmatisch HTML-elementen kunt maken.
Het creëert een HTML-element, maar stopt deze nog niet in de DOM. Je kunt alle properties zien met `console.dir(element)`. Een aantal hiervan zijn belangrijk:
- id
- style
- *className*

```js
const element = document.createElement("h2");
element.className = "name-of-class";
element.style = "color: red; background-color: blue";
```
Staat gelijk aan: `<h2 class="name-of-class" style="color: red; background-color: blue"></h2>`

### Meerdere classNames

Meerde classNames kun je gemakkelijk doen door een spatie toe te voegen:
```js
element.className = "container center";
```

### className is niet class
`class` is in javascript een gereserveerd begrip. Daarom wijs je een CSS class toe met className. Dit is belangrijk voor later i de cursus. 

---
#### Document.createElement
Complete the function createCard such that it returns a `<div class="card"></div>` element (not an HTML string)
```diff
function createCard() {
+   const div = document.createElement('div');
+   div.className = "card";
+   return div;
}

// sample usage (do not modify)
console.log(createCard());
```

## React.createElement
In React gebruiken ze geen `document.createElement`. In plaats daarvan heeft het [React object](2-react-intro.md#het-react-object) een createElement property.

In plaats van dat `document.createElement` een DOM element teruggeeft. Geeft `React.createElement` een object terug dat lijkt op:
```js
const element = React.createElement("h1");
//returns an object similar to this one:
{
  type: 'h1',
  props: {}
}
```
React maakt gebruik van een *virtuele DOM*. Een virtuele representatie van de UI in het geheugen die gelijk wordt gehouden met de echte DOM. 

### Hoe het werkt
in `React.createElement` gebruiken ze dezelfde attribute namen als `document.createElement`:
```js
React.createElement("h1", {className: "center", style: "color: red"}, "Hello World")
```

- De **eerste parameter** van `React.createElement` is het soort HTML Element dat je wilt.
- De **tweede parameter** zijn de *attributes* van het element. 
- En **de derde** zijn de children van het element. Dit kan tekst zijn; maar ook nieuwe React elemeten.

Een React element is het kleinste bouwsteentje van React. Je kunt verschillende elementen combineren met geavanceerde logica voor het bouwen van, bijvoorbeeld, een supermarkt app.

---
### React Elements 1
Complete the createDivElement function such that it creates a React Element that represents a div with the text Hello World!
```diff
+import React from "react";

function createDivElement() {
+   return React.createElement('div', null, 'Hello World!');
}

// sample usage (do not modify)
console.log(createDivElement());
```

### React Elements 2
Complete the createTitle function such that it creates a React Element that represents an h1 with the text Welcome to our supermarket and the class hero-title.
```diff
+import React from 'react';

function createTitle() {
+   return React.createElement('h1', {className: 'hero-title'}, 'Welcome to our supermarket');
}

// sample usage (do not modify)
console.log(createTitle());
```

---
## [Ga naar: 3. ReactDOM Intro](3-reactDOM-intro.md)