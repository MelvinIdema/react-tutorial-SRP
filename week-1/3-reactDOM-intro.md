# ReactDOM Intro
ReactDOM is de lijm tussen React en de DOM. React creëert namelijk een virtuele representatie van de User Interface. Wat een Virtuele DOM genoemd wordt. ReactDOM is een aparte library dat de DOM gelijk sychroiseert met deze virtuele DOM.

Door deze scheiding is het mogelijk om React niet alleen voor de browser te gebruiken. Maar ook voor native apps op Android en iOS. React heeft eigenlijk niets te maken met een browser. Maar wordt hier wel veel voor gebruikt.

### De twee meest populaire extra libraries zijn:
- ReactDOM
- React Native

ReactDOM verbind React met de browser. Terwijl React Native React verbindt met een native app.

<br>

![De Workflow](https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1579456877/react-tutorial/lessons/reactdom1.png)

ReactDOM kun je installeren met NPM:
```cli
npm install react-dom
```

En importeer je net als React:
```js
import ReactDOM from 'react-dom';
```

ReactDOM heeft een render functionaliteit. Die je ook als *named import* kunt importeren:
```js
import {render} from 'react-dom';
```

Door specifiek een *named import* te gebruiken. Voorkom je dat een bundler als Webpack teveel code mee bundelt die niet gebruikt worden.

## Gebruik ervan
ReactDOM heeft een *root* element nodig. Een element op de HTML pagina die al bestaat en waarin React ***alles*** regelt. Vaak 'root' genaamd:
```html
<div id="root"></div>
```

Een element kun je vervolgens als volgt 'renderen':
```js
import React from 'react';
import {render} from 'react-dom';

const root = document.getElementById('root');
render(React.createElement('p', {}, "Hello World!"), root);
```

Waarin de eerste parameter een React element is. En de tweede de 'root'. 

---
#### ReactDOM 1
Render the element on the page inside the given root in the index.html page.
When an index.html file is available, you can see the output of your code by clicking on the Browser tab. You can try it already in this challenge!

Also make sure to check the code inside the index.html file so that you can get the id of the root element.
```diff
import React from "react";
+import {render} from "react-dom";

+const root = document.getElementById('react-root');
const element = React.createElement("p", {}, "Hello World");
+render(element, root);
```

#### ReactDOM 2
Render an `<h1>Online Supermarket</h1>` on the page inside the given root.
```diff
+import React from 'react';
+import {render} from 'react-dom';
+
+const root = document.getElementById('react-root');
+const elem = React.createElement('h1', {}, "Online Supermarket");
+
+render(elem, root);
```

#### ReactDOM 4
Render an `<h1 class="title">Online Supermarket</h1>` on the page inside the given root.
```diff
+import React from 'react';
+import {render} from 'react-dom';
+
+const root = document.getElementById('react-root');
+const h1 = React.createElement('h1', {className: 'title'}, "Online Supermarket");
+
+render(h1, root);
```

## Het Root Element
Het Root element die je meegeeft aan ReactDOM zal *volledig* door React beheer worden. Je kan dus ***niets*** in dit root element zelf plaatsen. Zo kun je een hele app bouwen met React. Maar ook bijvoorbeeld alleen je winkelwagentje. Dan zou je Root element er zo uit kunnen zien:
```html
<div id="react-shoppingCart"></div>
```
Je applicatie kan dus ook meer dan 1 root element bevatten.

---
## [Ga naar: 4. Intro to JSX](4-intro-to-jsx.md)