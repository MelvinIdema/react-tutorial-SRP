# JSX 2

## JSX Children
Net als in HTML kan je JSX-element ook *children* bevatten. Dit schrijf je hetzelfde als in HTML (met de regels van JSX in acht nemend):
```jsx
const list = <ul>
    <li>List item 1</li>
    <li>List item 2</li>
</ul>;
```

Met React.createElement ziet het er dan zo uit:
```js
const list = React.createElement('ul', null,
   React.createElement('li', null, 'List item 1'),
   React.createElement('li', null, 'List item 2') 
);
```
Zoals je ziet wordt het al snel heel ingewikkeld. Zeker als je ook nog eens attributen toevoegt. 

Er is alleen 1 probleempje. Bij het returnen van een function:
```jsx
function getList() {
    return
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
    </ul>
}
```
Zal Automatic Semicolon Insertion een semicolon achter return plakken:
```js
function getList() {
    return;
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
    </ul>
}
```
Waardoor je dus niet je React elementen returned. Daarom gebruik je `()` bij het returnen. Om te voorkomen dat er een `;` naast geplaatst wordt:
```js
function getList() {
    return (
        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
        </ul>
    )
}
```

### Payment methods dropdown
Complete the getPaymentMethods function such that it returns a `<select>` with a class "payment-methods" containing 3 `<option>` elements, representing the following payment methods:
- Card
- Paypal
- Cash on delivery

Every option should have a class "payment-method".

```diff
import React from "react";

function getPaymentMethods() {
+      return (
+        <select className="payment-methods">
+            <option className="payment-method">Card</option>
+            <option className="payment-method">Paypal</option>
+            <option className="payment-method">Cash on delivery</option>
+        </select>
+    )
}

// sample usage (do not modify)
console.log(getPaymentMethods());
```

### Dropdown menu
Complete the getDropdownMenu function such that it returns a representation of following HTML:
```html
  <ul id="dropdown-menu" class="dropdown">
      <li>Profile</li>
      <li>Orders</li>
      <li class="separator"></li>
      <li>Logout</li>
  </ul>
```

```diff
import React from "react";

function getDropdownMenu() {
+    return (
+        <ul id="dropdown-menu" className="dropdown">
+            <li>Profile</li>
+            <li>Orders</li>
+            <li className="separator"></li>
+            <li>Logout</li>
+        </ul>
+    )
}

// sample usage (do not modify)
console.log(getDropdownMenu());
```
      
## Self-closing tags
In tegenstelling tot HTML, kun je in JSX ***elk*** element sluiten als een 'self-closing tag':
```jsx
const seperator = <li className="separator" />
```

### User Avatar
Complete the getUserAvatar function such that it returns an img with an src pointing to the path received as an argument.
```diff
import React from "react";

function getUserAvatar(path) {
+   return <img src={path} />
}

// sample usage (do not modify)
const url = "https://res.cloudinary.com/dbfn5lnvx/image/upload/v1576923026/react-tutorial/misc/user.png";
console.log(getUserAvatar(url));
```

## JSX Fragments
