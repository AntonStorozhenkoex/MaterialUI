import { link } from "./localhost";

function fetchData() {
  return fetch(link, {
    method: "GET",
  }).then((response) => response.json());
}
function createNewTodo(inputValue) {
  return fetch(link, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ value: inputValue }),
  }).then((response) => response.json());
}
function listItemToggle(elem) {
  return fetch(`${link}/toggle/${elem.id}`, {
    method: "PUT",
  });
}
function deleteTodo(todo) {
  return fetch(`${link}${todo.id}`, {
    method: "DELETE",
  });
}
function deleteAllItems() {
  return fetch(link, {
    method: "DELETE",
  });
}

export default {
  createNewTodo,
  listItemToggle,
  deleteTodo,
  deleteAllItems,
  fetchData,
};
