import React, {useState, useEffect} from "react";
import ProductsList from "./ProductsList.js";
import AddProductForm from "./AddProductForm.js";

export default function StoreFront() {
    const [products, setProducts] = useState(() => {
        return JSON.parse(localStorage.getItem("products")) ?? [];
    });
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [validation, setValidation] = useState("");

    //** Updates localStorage */
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));

        if(products.length === 0) document.title = "No products";
        if(products.length === 1) document.title = "1 product";
        if(products.length >= 2) document.title = `${products.length} products`;
    }, [products])

    function handleFormSubmit(event) {
        event.preventDefault();

        if (!name) {
            setValidation("Please enter a name");
            return ;
        }
        if (!description){
            setValidation("Please enter a description");
            return ;
        }
        setProducts([...products, {
            id: products.length + 1,
            name: name,
            description: description,
        }]);
        setName("");
        setDescription("");
        setValidation("");
    }

    function handleDeleteClick(id) {
        setProducts(products.filter(product => product.id !== id));
    }

    function handleNameChange(value) {
        setName(value);
    }

    function handleDescriptionChange(value) {
        setDescription(value);
    }

    return <>
        <AddProductForm
            onFormSubmit={handleFormSubmit}
            name={name}
            onNameChange={handleNameChange}
            description={description}
            onDescriptionChange={handleDescriptionChange}
            validation={validation}/>
        <div>{products.length === 0 && <p>Add your first product</p>}</div>
        <ProductsList products={products} onDeleteClick={handleDeleteClick} />
    </>;
}