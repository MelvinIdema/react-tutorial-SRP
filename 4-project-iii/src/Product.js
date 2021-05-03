import React, {useState} from "react";

export default function Product(props) {
    const {details} = props;
    const [counter, setCounter] = useState(0);

    function handleButtonClick(type) {
        if(type === "increment") setCounter(counter + 1);
        if(type === "decrement" && counter !== 0) setCounter(counter - 1);
    }

    return <div className="product">
        <img width="50" alt="" src={details.image}/>
        <div className="product-info">
            <h2>{details.name}</h2>
            <p>{details.description}</p>
        </div>
        <div className="product-buttons">
            <button
                className="product-sub"
                onClick={_ => handleButtonClick("decrement")} disabled={counter === 0}>-</button>
            <h3 className="product-count">{counter !== 0 && counter}</h3>
            <button
                className="product-add"
                onClick={_ => handleButtonClick("increment")}>+</button>
        </div>
    </div>
}