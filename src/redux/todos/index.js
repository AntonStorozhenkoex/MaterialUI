import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  DELETE_ALL_TODO,
  GET_TODOS_SUCCESS,
} from "./types";

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.payload.id,
        value: action.payload.value,
        isDone: false,
      };
    case DELETE_TODO:
      if (state.id !== action.payload) {
        return state;
      }
      return {
        ...state,
      };
    case DELETE_ALL_TODO:
      if (state.id) {
        return state;
      }
      return {
        ...state,
      };
    case TOGGLE_TODO:
      if (state.id !== action.payload) {
        return state;
      }
      return {
        ...state,
        isDone: !state.isDone,
      };
    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)];
    case DELETE_TODO:
      return state.filter((t) => t.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((t) => todo(t, action));
    case DELETE_ALL_TODO:
      return state.filter((t) => false);
    case GET_TODOS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
