import React, {useState} from "react";
import Product from "./Product";

export default function StoreFront() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    function handleAddProductSubmit(e) {
        e.preventDefault();
        if(name === "" || description === "") {
            setError("Name and the description cannot be empty")
            return;
        }

        setError("");
        const product = {
            id: products.length,
            name: name,
            description: description
        }
        setProducts([...products, product]);
        setName("");
        setDescription("");
    }

    function handleDeleteProductClick(id) {
        setProducts(products.filter(product => product.id !== id));
    }

    return <>
        <form onSubmit={handleAddProductSubmit}>
            <div>
                <label htmlFor="name">Enter the name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter the name"
                    className="textfield" />
            </div>
            <div>
                {error && <div className="validation-message">{error}</div>}
                <label htmlFor="description">Enter the description</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Enter the description"
                    className="textfield" />
            </div>
            <div className="form-footer">
                <div className="validation-message"></div>
                <input type="submit" className="btn btn-primary" value="Add product" />
            </div>
        </form>
        {products.length === 0 && <div><p>Add your first product</p></div>}
        <ul className="store-front">
            {products.length !== 0 &&
            products.map(product => {
                return <li key={product.id}>
                    <Product details={product} />
                    <button
                        onClick={_ => handleDeleteProductClick(product.id)}
                        className="btn-outline btn-delete">Delete</button>
                </li>
            })
            }
        </ul>
    </>;
}