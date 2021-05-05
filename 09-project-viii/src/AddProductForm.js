import React from "react";

export default function AddProductForm(props) {
    const {
        onFormSubmit,
        name,
        onNameChange,
        description,
        onDescriptionChange,
        validation
    } = props;

    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <label htmlFor="product-name">Name:</label>
                <input type="text" value={name} onChange={e => onNameChange(e.target.value)} id="product-name" placeholder="Enter the name" className="textfield" />
            </div>
            <div>
                <label htmlFor="product-description">Description:</label>
                <input type="text" value={description} onChange={e => onDescriptionChange(e.target.value)} id="product-description" placeholder="Enter the description" className="textfield" />
            </div>
            <div className="form-footer">
                <div className="validation-message">{validation}</div>
                <input type="submit" className="btn btn-primary" value="Add product" />
            </div>
        </form>
    );
}