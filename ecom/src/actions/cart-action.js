import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../constants/action-types";
import { forEach } from '../common-libraries'

export const addToCart = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    let alreadyExists = false;
    forEach(cartItems, (item) => {
        if (item._id === product._id) {
            alreadyExists = true;
            item.count++;
        }
    });
    if (!alreadyExists) {
        cartItems.push({ ...product, count: 1 });
    }
    dispatch({
        type: ADD_TO_CART,
        payload: { cartItems },
    });
};

export const removeFromCart = (product) => (dispatch, getState) => {
    const cartItems = getState()
        .cart.cartItems.slice()
        .filter((item) => item._id !== product._id);
    dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};


export const clearCart = () => (dispatch) => {
    dispatch({ type: CLEAR_CART });
};
