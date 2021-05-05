import React, {useState, useEffect} from "react";
import ProductsList from "./ProductsList.js";
import AddProductForm from "./AddProductForm.js";
import useFetch from "./useFetch.js";

export default function StoreFront() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [validation, setValidation] = useState("");
    const {post} = useFetch('https://api.learnjavascript.online/demo/react/admin/');

    function postProduct(product) {
        post('products', { name: product.name, description: product.description })
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }

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

        const product = {
            id: products.length + 1,
            name: name,
            description: description
        }

        postProduct(product);
        setProducts([...products, product]);

        setName("");
        setDescription("");
        setValidation("");
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    function handleDeleteClick(id) {
        setProducts(products.filter(product => product.id !== id));
    }

    return <>
        <AddProductForm name={name} description={description} validation={validation} onNameChange={handleNameChange} onDescriptionChange={handleDescriptionChange} onFormSubmit={handleFormSubmit} />
        <div>{products.length === 0 && <p>Add your first product</p>}</div>
        <ProductsList products={products} onDeleteClick={handleDeleteClick} />
    </>;
}