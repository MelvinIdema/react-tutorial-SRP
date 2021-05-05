import React from "react";
import {render} from "react-dom";
import StoreFront from "./StoreFront.js";

import "./index.css";

function App() {
    return (<>
        <p style={{fontFamily: "'Helvetica', sans-serif", fontSize: "32px", textAlign: "center"}}>Voeg een product toe en herlaad de pagina om de magie te zien!</p>
        <StoreFront />
    </>);
}

render(<App />, document.querySelector("#react-root"));