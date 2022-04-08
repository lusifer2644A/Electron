import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import logo from "../../assets/images/logo.png";
import CartNavbar from "../Cart/CartNavbar";

const Navbar = ({ home }) => {
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

        if (home) return (navbarRef.current.className = "navbar sticky");

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
            <div className="navbarLinks flex-row">
                {/* <CartNavbar /> */}
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
                        <NavLink
                            exact
                            activeStyle={{ color: "red" }}
                            to="/"
                            onClick={() => {
                                navLinkClickHandler();
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="navList">
                        <NavLink
                            exact
                            activeStyle={{ color: "red" }}
                            to={"/products"}
                            onClick={() => {
                                navLinkClickHandler();
                            }}
                        >
                            Products
                        </NavLink>
                    </li>
                    <li className="navList">
                        <NavLink
                            exact
                            activeStyle={{ color: "red" }}
                            to="/distributors"
                            onClick={() => {
                                navLinkClickHandler();
                            }}
                        >
                            Distributors
                        </NavLink>
                    </li>
                    <li className="navList">
                        <NavLink
                            exact
                            activeStyle={{ color: "red" }}
                            to="/dealership"
                            onClick={() => {
                                navLinkClickHandler();
                            }}
                        >
                            Dealership
                        </NavLink>
                    </li>
                    <li className="navList">
                        <NavLink
                            exact
                            activeStyle={{ color: "red" }}
                            to="/complaint"
                            onClick={() => {
                                navLinkClickHandler();
                            }}
                        >
                            Complaint
                        </NavLink>
                    </li>
                    <li className="navList">
                        <NavLink
                            exact
                            activeStyle={{ color: "red" }}
                            to="/about"
                            onClick={() => {
                                navLinkClickHandler();
                            }}
                        >
                            About Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
