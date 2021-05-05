import React from "react";
import {render} from "react-dom";
import StoreFront from "./StoreFront.js";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import ProductDetails from "./ProductDetails.js";

import "./index.css";

function App() {
    return (<BrowserRouter basename={'react-tutorial-SRP/16-project-xv/build/'}>
        <main>
            <Switch>
                <Route exact path="/"><StoreFront /></Route>
                <Route exact path="/products/:id"><ProductDetails /></Route>
            </Switch>
        </main>
    </BrowserRouter>);
}

render(<App />, document.querySelector("#react-root"));
