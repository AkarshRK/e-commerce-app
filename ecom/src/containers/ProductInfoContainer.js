import React from "react";
import ProductDetails from "../components/ProductDetails";
import Aux from "../hoc/_Aux";

function ProductInfoContainer(props) {
    return (
        <Aux>
            <ProductDetails />
        </Aux>
    )
}
export default ProductInfoContainer;