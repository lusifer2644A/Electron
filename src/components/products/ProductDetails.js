import React from "react";
import Carousel from "../Landing/Carousel";
import Modal from "../UI/Modal";

import warrenty_image from "../../assets/images/6mw.png";

const ProductDetails = ({ data, onClose }) => {
    const actualPrice = parseInt(data.price);
    const dis = parseInt(data.discount);
    const discountedPrice = actualPrice - (dis / 100) * actualPrice;

    return (
        <Modal onClose={onClose}>
            <div className="flex-row pdDetails-container">
                <div className="pd--left mr-2">
                    <div className="pd_carousel_area">
                        <Carousel
                            sliderImages={data.images}
                            autoPlayInterval={4}
                            showButtons={true}
                        />
                    </div>
                </div>
                <div className="pd-right">
                    <div className="x-large my-1">{data.name}</div>
                    <div className="large grey-color">by {data.company}</div>
                    <div className="medium grey-color inlineBlock">
                        Model Number: {data.model}
                    </div>
                    <div className="flex-row">
                        {data.isLatest && (
                            <div className="pdLatest mr-1">NEW</div>
                        )}
                        <div className="pdDiscount x-small bold mr-1">
                            {data.discount}% OFF
                        </div>
                    </div>
                    <div className="flex-row align-center">
                        <div className="pdPrice x-large grey-color mr-1 green">
                            ₹{discountedPrice}
                        </div>
                        <div className="pdPrice large grey-color textStrike">
                            {actualPrice}
                        </div>
                    </div>
                    <div className="large grey-color bold my-2">Warrenty:</div>
                    <div className="pdDetails-warrenty">
                        <img src={warrenty_image} alt="" />
                    </div>
                    {/* =====FORM AREA======= */}
                    <div className="large grey-color bold my-2">Features:</div>
                    <ul className="pdFeatureList ml-1">
                        {data.features.map((feature) => {
                            return (
                                <li className="small grey-color">{feature}</li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div className="productModalButtons">
                <button onClick={onClose} className="mr-1 button--primary">
                    Close
                </button>
                <button
                    onClick={() => alert("Work in Progress")}
                    className="button--secondary"
                >
                    Next
                </button>
            </div>
        </Modal>
    );
};

export default ProductDetails;
