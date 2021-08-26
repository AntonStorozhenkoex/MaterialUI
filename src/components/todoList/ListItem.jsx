import React from "react";
import { deleteTodo, toggleTodo } from "../../redux/todos/action";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export const ListItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <Grid container justifyContent="space-between" className="listItem">
      <li
        className={todo.isDone ? "done" : "notDone"}
        onClick={() => dispatch(toggleTodo(todo))}
      >
        {todo.value}
      </li>
      <IconButton aria-label="delete">
        <DeleteIcon
          fontSize="medium"
          onClick={() => dispatch(deleteTodo(todo))}
        />
      </IconButton>
    </Grid>
  );
};
