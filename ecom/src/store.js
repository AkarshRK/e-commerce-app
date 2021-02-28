import { createStore, combineReducers, applyMiddleware } from "redux";
import { productsReducer } from "./reducers/product-reducer";
import { cartReducer } from "./reducers/cart-reducer";
import thunk from "redux-thunk";

const initialState = {};
const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
  }),
  initialState,
  applyMiddleware(thunk)
);
export default store;
