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

### Wat kost een import
Elke module die je importeert kost een aantal kilobytes die mee wordt gebundeld in een groot javascript bestand. Dit moet je zo klein mogelijk houden.

## Opdrachten
### Baby Steps
Complete the getReactVersion method such that it returns the current installed version of React.
```diff
+ import React from 'react';

function getReactVersion() {
+    return React.version
}

// sample usage (do not modify)
console.log(getReactVersion());

```