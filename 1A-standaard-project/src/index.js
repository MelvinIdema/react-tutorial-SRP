import React from "react";
import {render} from "react-dom";

import "index.css";

function App() {
    return <p>Hello World!</p>;
}

render(<App />, document.querySelector("#react-root"));