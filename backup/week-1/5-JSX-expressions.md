# JSX Expressions
Een expressie (expression) is een valide stukje Javascript dat een bepaalde waarde teruggeeft. Bijvoorbeeld een rekensom, een variabele of een functie. 

Een expressie gebruik je in JSX met de `{` en `}`. Zoals bijvoorbeeld:
```jsx
const title = <h1>1 + 2 staat gelijk aan: {1 + 2}</h1>;
```

Je kunt ook functies aanroepen in deze JSX expressies:
```jsx
function sum(a, b) {
    return a + b;
}
const title = <h1>1 + 2 staat gelijk aan {sum(1, 2)}</h1>;
```
### Navbar
Complete the getNavbar function such that it returns a div with the message: Logged in as USER. Log out

Where USER is the name of the user received as an argument.
```diff
import React from "react";

function getNavbar(user) {
+   return <div>Logged in as {user.name}. Log out</div>
}

// sample usage (do not modify)
const element = getNavbar({
    name: "Sam",
    age: 34
});
console.log(element);
```

### Notifications
Complete the getNotifications function such that it returns a p with the message: You have X new notifications
Where X is the number of notifications.
```diff
import React from "react";

function getNotifications(notifications) {
+   return <p>You have {notifications.length} new notifications</p>
}

// sample usage (do not modify)
const notifications = [{
    id: 1,
    text: "Your order has been delivered"
}, {
    id: 2,
    text: "Your coupon code has expired"
}];
const element = getNotifications(notifications);
console.log(element);
```
### Navbar II
Complete the getNavbar function such that it returns a div with the message: Logged in as USER. Log out
Where USER is the first name and last name of the user received as an argument.
```diff
import React from "react";

function getNavbar(user) {
+   return <div>Logged in as {user.firstName} {user.lastName}. Log out</div>;
}

// sample usage (do not modify)
const element = getNavbar({
    firstName: "Sam",
    lastName: "Dung",
    age: 27
});
console.log(element);
```

## Attribute Expressions
Je kunt ook expressies meegeven aan attributes. Zoals bijvoorbeeld:
```jsx
const count = 5;
const element = <input tabIndex={count} className="form-control"/>;
```
Als een waarde een `string` is. Dan dient het in `""` gewrapped te worden. Anders in `{}` curly braces.

Nummers en Booleans dienen ook in `{}` curly braces te worden gewrapped:
```jsx
<input tabIndex={2} disabled={true} className="textbox" />
```

### Dynamic Class
Complete the getPaymentButton function such that it returns a button with the text Pay. When the user is logged out, it should have the class disabled, and otherwise the class clickable.
```diff
import React from "react";

function getPaymentButton(user) {
    let name = "disabled";
    if (user.is_loggedin) {
        name = "clickable";
    }
+   return <button className={name}>Pay</button>;
}

// sample usage (do not modify)
const user = {
    id: 1,
    is_loggedin: true
}
console.log(getPaymentButton(user));
```

## Attribute Expressions 2
Als een van je attributen dynamisch is. Dan moet je het hele attribute als dynamisch beschouwen. Bijvoorbeeld bij meerdere classes:
```jsx
const clickable = "clickable";
const active = "active";

const button = <button className={['btn', clickable, active].join(" ")}>Click me</button>;
```

### Payment methods
Complete the getPaymentMethod function such that it returns the payment method.
Every payment method should be a list item (li) with the 2 classes,

- the first one should be payment-method.
- the second one should be based on the payment method. So if the payment method is paypal, the class should be: option-paypal.
- So for example `getPaymentMethod("paypal")` would return an `<li className="payment-method option-paypal">paypal</li>`.

```diff
import React from "react";

function getPaymentMethod(name) {
+   return <li className={['payment-method', `option-${name}`].join(" ")}>{name}</li>;
}

// sample usage (do not modify)
console.log(getPaymentMethod("card"));
console.log(getPaymentMethod("paypal"));
```

---
## [Ga naar: 6. JSX 2](6-JSX-2.md)