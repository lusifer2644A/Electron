import React, { useState } from "react";
import Carousel from "../Landing/Carousel";
import ProductDetails from "./ProductDetails";
import warrenty_image from "../../assets/images/6mw.png";

const Product = ({ data }) => {
    const [showProductModalState, setShowProductModalState] = useState(false);

    const showProductModal = () => {
        setShowProductModalState(true);
    };
    const hideProductModal = () => {
        setShowProductModalState(false);
    };
    console.log(data);
    return (
        <>
            {showProductModalState && (
                <ProductDetails data={data} onClose={hideProductModal} />
            )}
            <div className="card" onClick={showProductModal}>
                {/* <div className="card_warrenty">
                    <img src={warrenty_image} alt="" />
                </div> */}
                <div className="pdImage">
                    <div className="product_carousel_area">
                        {/* <Carousel
                            sliderImages={data.images}
                            autoPlayInterval={4}
                            showButtons={false}
                        /> */}
                        <img src={data.images[0].url} alt="" />
                    </div>
                </div>
                <div className="pdDetails flex-row">
                    <div className="pdDiv1">
                        <div className="pdName medium dark-grey heading2-color">
                            {data.name}
                        </div>
                        <div className="pdCompany small heading-color">
                            by {data.company}
                        </div>
                    </div>
                    <div className="pdDiv2">
                        {data.isLatest === true && (
                            <div className="pdLatest x-small bold ">NEW</div>
                        )}
                        <div className="pdDiscount x-small bold">
                            {data.discount}% OFF
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
