import React, {useContext} from "react";
import {AppContext} from "./AppContext";

export default function Navbar() {
    const context = useContext(AppContext);
    return <>
        Shopping in <select onChange={e => context.setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
    </select>
        - Using {context.theme} theme <button onClick={context.toggleTheme}>Toggle theme</button>
        <hr />
    </>;
}