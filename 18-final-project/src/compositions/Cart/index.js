import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "./index.css";

const stripeLoadedPromise = loadStripe("pk_test_51IpbnFJiv8wpB3squTZGNnlqyld7lislMBTj6kYJaIst2079ovi8Q5txXspM9PbluB5EQr16cuGudjrAgJJQ9wXD00BeSZrrGy");

export default function Cart({ cart }) {
    const totalPrice = cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );

    const [email, setEmail] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();

        const lineItems = cart.map((product) => {
            return { price: product.price_id, quantity: product.quantity };
        });

        stripeLoadedPromise.then((stripe) => {
            stripe
                .redirectToCheckout({
                    lineItems: lineItems,
                    mode: "payment",
                    successUrl: "https://ikbenmel.vin/",
                    cancelUrl: "https://ikbenmel.vin/",
                    customerEmail: email,
                })
                .then((response) => {
                    // this will only log if the redirect did not work
                    console.log(response.error);
                })
                .catch((error) => {
                    // wrong API key? you will see the error message here
                    console.log(error);
                });
        });
    }

    return (
        <div className="cart-layout">
            <div>
                <h1>Your Cart</h1>
                {cart.length === 0 && (
                    <p>You have not added any product to your cart yet.</p>
                )}
                {cart.length > 0 && (
                    <>
                        <table className="table table-cart">
                            <thead>
                            <tr>
                                <th width="25%" className="th-product">
                                    Product
                                </th>
                                <th width="20%">Unit price</th>
                                <th width="10%">Quanity</th>
                                <th width="25%">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {cart.map((product) => {
                                return (
                                    <tr key={product.id}>
                                        <td width="25%">
                                            <img
                                                src={product.image}
                                                width="30"
                                                height="30"
                                                alt=""
                                            />{" "}
                                            {product.name}
                                        </td>
                                        <td width="20%">${product.price}</td>
                                        <td width="10%">{product.quantity}</td>
                                        <td width="25%">
                                            <strong>${product.price * product.quantity}</strong>
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                            <tfoot>
                            <tr>
                                <th colSpan="2"/>
                                <th className="cart-highlight">Total</th>
                                <th className="cart-highlight">${totalPrice}</th>
                            </tr>
                            </tfoot>
                        </table>
                        <form className="pay-form" onSubmit={handleFormSubmit}>
                            <p>
                                Enter your email and then click on pay and your products will be
                                delivered to you on the same day!
                                <br />
                            </p>
                            <Input
                                placeholder="Email"
                                onChange={(event) => setEmail(event.target.value)}
                                value={email}
                                type="email"
                                autocomplete="email"
                                required
                            />
                            <Button type="submit" label="Pay now"/>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
