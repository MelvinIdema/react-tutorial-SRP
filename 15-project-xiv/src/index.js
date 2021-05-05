import React, {useContext} from "react";
import {render} from "react-dom";
import StoreFront from "./StoreFront.js";
import Navbar from "./Navbar.js";
import {AppContext, AppProvider} from "./AppContext.js";
import clsx from "clsx";
import "./index.css";

function App() {
    const context = useContext(AppContext);
    const classes = clsx({
        'dark': context.theme === 'dark'
    })

    return <div className={classes}>
        <Navbar />
        <StoreFront />
    </div>;
}

render(<AppProvider><App /></AppProvider>, document.querySelector("#react-root"));