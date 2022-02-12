import React, { useState } from "react";
import b1 from "../../assets/images/banner3l.jpg";
import b2 from "../../assets/images/banner.jpg";
import b3 from "../../assets/images/banner2.jpg";

const sliderImages = [
    {
        url: b1,
    },
    {
        url: b2,
    },
    {
        url: b3,
    },
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const length = sliderImages.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (length === 0 || length === null) return null;

    return (
        <div className="carousel">
            <button onClick={prevSlide} className="carousel-button prev">
                {"<"}
            </button>
            <button onClick={nextSlide} className="carousel-button next">
                {">"}
            </button>
            <ul>
                {sliderImages.map((slide, index) => {
                    return (
                        <li
                            className={
                                index === current ? "slide active" : "slide"
                            }
                            key={index}
                        >
                            <img src={slide.url} alt={index} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Carousel;
