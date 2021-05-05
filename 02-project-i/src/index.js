import React from "react";
import {render} from "react-dom";
import Link from "./Link.js";
import Button from "./Button.js";
import Container from "./Container.js";
import Input from "./Input.js";

import './index.css';

function App() {
    return <Container>
        <Link href="#">This is a link</Link>
        <Button>This is a button</Button>
        <Input name="myInput" placeholder="Put Something Here"/>
    </Container>;
}

render(<App />, document.querySelector("#react-root"));