import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import productsReducer from "./products_reducer";
import bidsReducer from "./bids_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productsReducer,
    bids: bidsReducer
});

export default entitiesReducer;
