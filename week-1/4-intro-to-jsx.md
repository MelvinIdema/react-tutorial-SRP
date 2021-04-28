# Intro to JSX

In React gebruik je vaak React.createElement. Heel vaak. Bij een grotere, moeilijkere UI wordt deze syntax lang en omslachtig. 

Om dit probleem op te lossen is ***JSX*** uitgevonden. Dit ziet er uit als HTML, maar is **geen** HTML. Om JSX te gebruiken moet je React geimporteerd hebben (red. tot versie 17).

```jsx
import React from 'react';
const title = <h1>Hello World</h1>;
```

wordt:
```js
import React from 'react';
const title = React.createElement('h1', {}, "Hello World");
```

JSX maakt het dus makkelijker om React.createElement functies te lezen & te schrijven. Een tool als Babel is nodig om JSX naar React.createElement te compileren.

Je kunt JSX ook gebruiken met ReactDOM:
```jsx
import React from 'react';
import {render} from 'react-dom';

const root = document.getElementById("root");
render(<h1>Hello World</h1>, root);
```

### [Opdracht] Basic JSX
Using JSX, render a paragraph element with the text My first JSX
```diff
import React from "react";
import {render} from "react-dom";

+const root = document.getElementById('react-root');
+const p = <p>My first JSX</p>
+
+render(p, root);
```

### Attributes
In JSX zet je een attribute hetzelfde als in HTML. Met een maar: je gebruikt de Javascript variant van de attribute. Zoals:
- `class` -> `className`
- `for` -> `htmlFor`

Dat ziet er uit als volgt:
```jsx
const title = <h1 className="title">Hello World!</h1>
```
En wordt gecompileerd tot:
```js
const title = React.createElement("h1", { className: "title"}, "Hello World!");
```

#### Attributes 1
Using JSX, render a paragraph that has the class "selected" and an id of "promo" with the text Hello World
```diff
import React from "react";
import {render} from "react-dom";

+const root = document.getElementById("react-root");
+const p = <p className="selected" id="promo">Hello World</p>
+render(p, root);
```

### Working with JSX
JSX is eigenlijk gewoon een object. En kun je dus ook gebruiken als object. Zoals:
- Toewijzen aan een variable:
    - ```js
      const title = <h1 className="title">Supermarket</h1>;
        ```
- Returnen van een functie:
    - ```js
        function getTitle() {
          return <h1 className="title">Supermarket</h1>
        }
        ```
      
#### Supermarket Tagline
Using JSX, complete the getTagline method such that it returns an h2 element with the class: "subtitle" and the text: "Grocery shopping simplified".
```diff
import React from "react";

function getTagline() {
+   return <h2 className="subtitle">Grocery shopping simplified</h2>
}

// sample usage (do not modify)
console.log(getTagline());
```

#### Login status
Complete the getLoginStatus method by returning a paragraph with the text: You are logged in when the user's logged in and a link to the login page otherwise with the text Login. The login page is located at /login.

In summary:
- when the user is logged in, you should only return a paragraph
- otherwise you should only return an anchor (a tag)

```diff
import React from "react";

/**
 * @param {boolean} is_loggedin
 */
function getLoginStatus(is_loggedin) {
+    if(is_loggedin) {
+        return <p>You are logged in</p>
+    }
+    return <a href="/login">Login</a>
}

// sample usage (do not modify)
console.log(getLoginStatus(true));
console.log(getLoginStatus(false));
```

---
## [Ga naar: 5. JSX Expressions](5-JSX-expressions.md)