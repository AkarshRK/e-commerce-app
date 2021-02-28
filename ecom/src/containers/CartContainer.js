import React from "react";
import Cart from "../components/Cart";
import Aux from "../hoc/_Aux";
function CartContainer(props) {
    return (
        <Aux>
            <Cart />
        </Aux>
    )
}

export default CartContainer;