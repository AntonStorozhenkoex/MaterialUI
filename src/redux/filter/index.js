import {
  SET_VISIBILITY_FILTER,
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
} from "./types";

export const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter((t) => t.isDone);
    case SHOW_ACTIVE:
      return todos.filter((t) => !t.isDone);
    default:
      return todos;
  }
};
