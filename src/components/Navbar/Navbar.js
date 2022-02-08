import React from "react";
import logo from "../../assets/images/logo.jpeg";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navLogo">
                <a href="/">
                    <img src={logo} alt="Electron" />
                </a>
            </div>
            <ul>
                <li className="navList">
                    <a href="/">Home</a>
                </li>
                <li className="navList">
                    <a href="#!">About Us</a>
                </li>
                <li className="navList">
                    <a href="#!">Products</a>
                </li>
                <li className="navList">
                    <a href="#!">Complaints</a>
                </li>
                <li className="navList">
                    <a href="#!">Dealership</a>
                </li>
                <li className="navList">
                    <a href="#!">Distributors</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
