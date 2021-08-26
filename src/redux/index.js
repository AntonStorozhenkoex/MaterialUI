import { combineReducers } from "redux";
import { todos } from "./todos/index";
import { visibilityFilter } from "./filter/index";

export const todoApp = combineReducers({ todos, visibilityFilter });
