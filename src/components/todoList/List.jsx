import React from "react";
import { ListItem } from "./ListItem";

export const List = ({ todos, visibleTodos }) => (
  <ul className="list">
    {todos.length > 0 ? (
      visibleTodos.map((todo) => <ListItem todo={todo} key={todo.id} />)
    ) : (
      <li className="noneTodo">No records found</li>
    )}
  </ul>
);
