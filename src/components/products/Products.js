import React from "react";
import { useState } from "react/cjs/react.development";
import Product from "./Product";
import ProductsData from "./products.json";

const Products = () => {
    const [products, setProducts] = useState(ProductsData);

    return (
        <div className="container">
            <div className="primary-color mainTitle">PRODUCTS (BETA)</div>
            <div className="productsContainer">
                {products.map((product, index) => {
                    return <Product data={product} key={index} />;
                })}
            </div>
        </div>
    );
};

export default Products;
