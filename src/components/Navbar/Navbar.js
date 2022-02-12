import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navLogo">
                <Link to="/">
                    <img src={logo} alt="Electron" />
                </Link>
            </div>
            <ul>
                <li className="navList">
                    <Link to="/">Home</Link>
                </li>
                <li className="navList">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="navList">
                    <Link to="/products">Products</Link>
                </li>
                <li className="navList">
                    <Link to="/complaint">Complaints</Link>
                </li>
                <li className="navList">
                    <Link to="/deal">Dealership</Link>
                </li>
                <li className="navList">
                    <Link to="/deal">Distributors</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
