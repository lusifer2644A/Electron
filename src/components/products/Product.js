import React from "react";

const Product = ({ data }) => {
    return (
        <div className="card">
            <div className="pdImage">
                <img src={data.url} alt="" />
            </div>
            <div className="productDetails">
                <div className="pdCompany large all-caps my-3">
                    {data.company}
                </div>
                <div className="pdName medium bold dark-grey">{data.name}</div>
            </div>
        </div>
    );
};

export default Product;
