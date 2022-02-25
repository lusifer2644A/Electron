import React from "react";

const Product = ({ data }) => {
    return (
        <div className="card">
            <div className="pdImage">
                <img src={data.url} alt="" />
            </div>
            <div className="productDetails">
                <div className="pdCompany large uppercase my-3 heading-color">
                    {data.company}
                </div>
                <div className="pdName medium bold dark-grey heading2-color">
                    {data.name}
                </div>
            </div>
        </div>
    );
};

export default Product;
