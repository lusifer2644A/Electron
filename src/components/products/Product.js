import React from "react";

const Product = ({ data }) => {
    console.log(data);
    return (
        <div className="card">
            <div className="pdImage">
                <img src={data.url} alt="" />
            </div>
            <div className="pdDetails">
                <div className="pdDiv1">
                    <div className="pdName medium dark-grey heading2-color">
                        {data.name}
                    </div>
                    <div className="pdDiscount x-small bold">
                        {data.discount}% OFF
                    </div>
                </div>
                <div className="pdCompany small heading-color">
                    by {data.company}
                </div>
            </div>
        </div>
    );
};

export default Product;
