import * as redux from "redux";
import { todoReducer } from "./todoreducer";
export const store=redux.createStore(todoReducer);