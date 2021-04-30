import React, {useState} from "react";
import ProductsList from "./ProductsList.js";
import AddProductForm from "./AddProductForm.js";

export default function StoreFront() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [validation, setValidation] = useState("");

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