import {
  ADD_TODO,
  DELETE_ALL_TODO,
  DELETE_TODO,
  GET_TODOS_SUCCESS,
  TOGGLE_TODO,
} from "./types";

export const fetchTodos = () => (dispatch, state, api) => {
  dispatch({
    type: "START_LOADING_TODOS",
  });
  return api
    .fetchData()
    .then((response) => {
      dispatch({
        type: GET_TODOS_SUCCESS,
        payload: response,
      });
    })
    .catch((err) =>
      dispatch({
        type: "ERROR_IN_LOADING_TODOS",
      })
    );
};
export const addNewTodo = (inputValue) => (dispatch, state, api) => {
  dispatch({
    type: "START_ADD_TODO",
  });
  return api
    .createNewTodo(inputValue)
    .then((response) => {
      dispatch({
        type: ADD_TODO,
        payload: response,
      });
    })
    .catch((err) =>
      dispatch({
        type: "ERROR_IN_ADD_TODO",
      })
    );
};
export const deleteTodo = (todo) => (dispatch, state, api) => {
  dispatch({
    type: "START_DELETE_TODO",
  });
  return api
    .deleteTodo(todo)
    .then((response) => {
      dispatch({
        type: DELETE_TODO,
        payload: todo.id,
      });
    })
    .catch((err) =>
      dispatch({
        type: "ERROR_IN_DELETING_TODO",
      })
    );
};
export const toggleTodo = (elem) => (dispatch, state, api) => {
  dispatch({
    type: "START_TOGGLE_TODO",
  });
  return api.listItemToggle(elem).then((response) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: elem.id,
    });
  });
};
export const deleteAllTodo = () => (dispatch, state, api) => {
  dispatch({
    type: "START_DELETE_ALL_TODO",
  });
  return api
    .deleteAllItems()
    .then((response) => {
      dispatch({
        type: DELETE_ALL_TODO,
        payload: response,
      });
    })
    .catch((err) =>
      dispatch({
        type: "ERROR_IN_DELETED_ALL",
      })
    );
};
