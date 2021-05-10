import {render} from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import StoreFront from "./StoreFront.js";
import ProductDetails from "./ProductDetails.js";
import Nav from "./Nav.js";
import About from "./About.js";
import Home from "./Home.js";
import NotFound from "./NotFound.js";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/products">
                    <StoreFront />
                </Route>
                <Route path="/products/:id">
                    <ProductDetails />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

render(<App />, document.querySelector("#react-root"));