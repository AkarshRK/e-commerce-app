import { FETCH_PRODUCTS } from "../constants/action-types";
import { FETCH_PRODUCTS_API } from "../constants/api-endpoints";
import axios from 'axios';


export const fetchProducts = () => async (dispatch) => {
    const res = await axios.get(FETCH_PRODUCTS_API);

    const { data } = res;
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data.products,
    });
};
