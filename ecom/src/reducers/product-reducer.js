import { FETCH_PRODUCTS } from "../constants/action-types";

export const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { items: action.payload, productList: action.payload };
        default:
            return state;
    }
};
