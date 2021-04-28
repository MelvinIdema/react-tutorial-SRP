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

### Basic JSX
Using JSX, render a paragraph element with the text My first JSX
```diff
import React from "react";
import {render} from "react-dom";

+const root = document.getElementById('react-root');
+const p = <p>My first JSX</p>
+
+render(p, root);
```