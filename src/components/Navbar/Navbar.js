import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
    const [active, setActive] = useState(true);

    //NAVBAR SCROLL EFFECT
    const [OFFSET, SET_OFFSET] = useState(0);

    const navbarRef = useRef();

    useEffect(() => {
        const onScroll = () => SET_OFFSET(window.pageYOffset);

        // clean up code
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    useEffect(() => {
        //set navigation class to fixed
        navbarRef.current.className = `${
            OFFSET >= 150 ? "navbar sticky" : "navbar"
        }`;
    });

    //HAMBURGER REFS AND BUTTONS
    const ulRef = useRef();
    const hamburgerRef = useRef();

    const navLinkClickHandler = () => {
        ulRef.current.className = `${active ? "active" : ""}`;
        hamburgerRef.current.className = `${
            active ? "hamburger active" : "hamburger"
        }`;
        setActive((prevState) => {
            return !prevState;
        });
    };

    return (
        <div className="navbar" ref={navbarRef}>
            <div className="navLogo">
                <Link to="/">
                    <img src={logo} alt="Electron" />
                </Link>
            </div>
            <button
                className="hamburger"
                onClick={() => {
                    ulRef.current.className = `${active ? "active" : ""}`;
                    hamburgerRef.current.className = `${
                        active ? "hamburger active" : "hamburger"
                    }`;
                    setActive((prevState) => {
                        return !prevState;
                    });
                }}
                ref={hamburgerRef}
            >
                {active ? (
                    <ion-icon
                        name="menu-outline"
                        className="hamIcon"
                    ></ion-icon>
                ) : (
                    <ion-icon
                        name="close-outline"
                        className="hamIcon"
                    ></ion-icon>
                )}
            </button>
            <ul ref={ulRef} className="">
                <li className="navList">
                    <Link
                        to="/"
                        onClick={() => {
                            navLinkClickHandler();
                        }}
                    >
                        Home
                    </Link>
                </li>
                <li className="navList">
                    <Link
                        to="/about"
                        onClick={() => {
                            navLinkClickHandler();
                        }}
                    >
                        About Us
                    </Link>
                </li>
                <li className="navList">
                    <Link
                        to="/products"
                        onClick={() => {
                            navLinkClickHandler();
                        }}
                    >
                        Products
                    </Link>
                </li>
                <li className="navList">
                    <Link
                        to="/complaint"
                        onClick={() => {
                            navLinkClickHandler();
                        }}
                    >
                        Complaints
                    </Link>
                </li>
                <li className="navList">
                    <Link
                        to="/deal"
                        onClick={() => {
                            navLinkClickHandler();
                        }}
                    >
                        Dealership
                    </Link>
                </li>
                <li className="navList">
                    <Link
                        to="/deal"
                        onClick={() => {
                            navLinkClickHandler();
                        }}
                    >
                        Distributors
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
