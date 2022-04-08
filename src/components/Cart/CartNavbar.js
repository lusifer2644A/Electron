import React from "react";

const CartNavbar = () => {
    return (
        <button className="cart-button">
            <div className="cart-icon">
                <ion-icon name="cart"></ion-icon>
            </div>
            <div className="cart-title">Cart</div>
            <div className="cart-item_count">3</div>
        </button>
    );
};

export default CartNavbar;
