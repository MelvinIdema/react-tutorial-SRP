import React, {useState} from "react";
import {render} from "react-dom";
import StoreFront from "./StoreFront";

import "./index.css";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (<>
        {!loggedIn &&
        <>
            <h2>Please login</h2>
            <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</button>
        </>
        }
        {loggedIn &&
        <>
            <StoreFront/>
            <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</button>
        </>
        }
    </>);
}

render(<App />, document.querySelector("#react-root"));