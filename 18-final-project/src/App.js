import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./compositions/Navbar/index.js";
import Home from "./compositions/Home/index.js";
import About from "./compositions/About/index.js";
import Products from "./compositions/Products/index.js";
import ProductDetails from "./compositions/ProductDetails/index.js";
import Cart from "./compositions/Cart/index.js";
import Footer from "./compositions/Footer";

function App() {
  const [cart, setCart] = useState(function () {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
      savedCart = [];
    }
    return savedCart;
  });

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  function handleProductDelete(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  function handleProductAdd(newProduct) {
    const itemInCart = cart.find(item => item.id === newProduct.id);
    if (itemInCart) {
      const updatedCart = cart.map(item => {
        if (item.id === newProduct.id) return {...item, quantity: item.quantity + 1}
        return item;
      });
      return setCart(updatedCart);
    }
  }

  return (<div className="flex-wrapper">
      <Navbar cart={cart} />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products
              cart={cart}
              onProductAdd={handleProductAdd}
              onProductDelete={handleProductDelete}
            />
          </Route>
          <Route path="/products/:id">
            <ProductDetails onProductAdd={handleProductAdd} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
