# Project XIV

In dit project heb ik de React hook *useContext* toegepast op het vorige project. 

Ik heb geleerd over de *useContext* hook. Wat een context is, hoe je een context aanmaakt en hoe je, door middel van een `Provider` een context kan gebruiken in je applicatie.
Vervolgens heb ik dit toegepast om een dark theme toe te voegen aan de applicatie, een toggleTheme en twee verschillende currencies.

### De uitwerking
URL: https://melvinidema.github.io/react-tutorial-SRP/15-project-xiv/build/

Belangrijke punten:
- Een veel voorkomende bug is dat een developer probeert een context te gebruiken in dezelfde component waar hij/zij de applicatie wrapt in een `Provider`. Je kunt `Context` niet gebruiken als de component niet in een `Provider` gewikkeld is. Dus zal je een wrapper moeten hebben om je applicatie die de provider toedient.
- Een voorbeeld van een context component is als volgt:
    ```jsx
    import React, { createContext } from "react";
    
    const ThemeContext = createContext();
    
    function ThemeProvider(props) {
    const theme =  "dark";
    
    return (
    <ThemeContext.Provider value={theme}>
    {props.children}
    </ThemeContext.Provider>
    );
    };
    
    export { ThemeContext, ThemeProvider };
    ```

---
## De opdracht
### App configuration
In this project, you will define an AppContext that will store the currency and the theme used in the entire app.
The theme defaults to dark and can be toggled by clicking on the Toggle theme button. A message displaying the current theme is shown: Using X theme where X is the current theme. The currency can be changed by selecting a new value in the dropdown. Changing the currency should reflect in the StoreFront (shopping in Y where Y is the chosen currency).

#### AppContext.js
- Start by writing the AppContext. Think about what values it should return.
- Default the theme to "dark" and default the currency to "USD"
#### index.js
- Wrap the App with the AppProvider.
- When the theme is dark, add the class "dark" to the <div> that is being rendered by the <App /> component.
#### StoreFront.js
- Replace Y by the current currency.
#### Navbar.js
- Replace X by the current theme.
- Make it possible to change the currency. When you select a new currency, it should automatically reflect in <StoreFront />
- Make it possible to toggle the theme by clicking on the Toggle theme button.
