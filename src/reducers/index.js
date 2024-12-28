import { combineReducers } from "redux";
import cartReducer from "./cart";
import categoriesReducer from "./categories";
import menuReducer from "./menu";
import quickLinkReducer from "./quicklink";
const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  quickLink: quickLinkReducer,
  menu: menuReducer,
});
export default rootReducer;