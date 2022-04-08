import React from "react";
import { Fragment, useState } from "react/cjs/react.development";
import Heading from "../layouts/Heading";
import Product from "./Product";
import ProductsData from "./products.json";
import warrenty_image from "../../assets/images/6mw-p.png";

const Products = () => {
    const [products, setProducts] = useState(ProductsData);

    return (
        <Fragment>
            <div className="container">
                <div className="pageHeadingBox">
                    <Heading name="Products" />
                </div>
                <div className="productsPageWarrentyArea">
                    <img src={warrenty_image} alt="" />
                    <p className="large bold ml-2">
                        6 Months Full Warrenty on all electronic parts.
                    </p>
                </div>
                <div className="productsContainer">
                    {products.map((product, index) => {
                        return <Product data={product} key={index} />;
                    })}
                </div>
            </div>
        </Fragment>
    );
};

export default Products;
