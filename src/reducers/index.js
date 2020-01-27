import selected from "./isSelected";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  selected: selected
});

export default rootReducer;
