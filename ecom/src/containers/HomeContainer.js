import React from "react";
import Products from "../components/Products";

import Aux from "../hoc/_Aux";

function HomeContainer(props) {
    return (
        <Aux>
            <Products />
        </Aux>
    )
}

export default HomeContainer;