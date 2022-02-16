import React, { useEffect, useRef, useState } from "react";

const Carousel = ({ sliderImages, autoPlayInterval }) => {
    const [current, setCurrent] = useState(0);
    const length = sliderImages.length;

    const autoPlayRef = useRef();

    useEffect(() => {
        autoPlayRef.current = nextSlide;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            autoPlayRef.current();
        }, autoPlayInterval * 1000);
    }, []);

    if (length === 0 || length === null) return null;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

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
