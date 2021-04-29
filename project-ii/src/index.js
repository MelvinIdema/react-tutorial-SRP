import React from "react";
import {render} from "react-dom";
import Link from "./Link.js";
import Container from "./Container.js";
import Button from "./Button.js";
import Input from "./Input.js";

import "./index.css";

function App() {
    return (<>
        <Container className="app">
            <Link href="https://react-tutorial.app">React Tutorial</Link>
            <Button disabled={true}>Login</Button>
            <Input placeholder="Full Name" name="full_name" />
        </Container>
    </>);
}


render(<App />, document.querySelector("#react-root"));