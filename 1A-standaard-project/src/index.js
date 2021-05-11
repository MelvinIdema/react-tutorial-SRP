import React from "react";
import {render} from "react-dom";

import "./index.css";

function App() {
    return (<>
        <h1>Development Website</h1>
        <p>Welkom op mijn website!</p>
        <p>Zoals elke Developer is ook mijn persoonlijke website niet af. Dit is ook meer een development environment. Voor een representatieve website kun je beter naar: <a href="http://www.melvinidema.nl/">melvinidema.nl</a> gaan.</p>
        <h2>Projecten:</h2>
        <ul>
            <li><a href="https://react.ikbenmel.vin/">React Tutorial SRP</a></li>
        </ul>
    </>);
}

render(<App />, document.querySelector("#react-root"));