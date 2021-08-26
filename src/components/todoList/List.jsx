import React from "react";
import { ListItem } from "./ListItem";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((them) => ({
  list: {
    listStyleType: "none",
    padding: 0,
  },
  noneTodo: {
    paddingTop: "40px",
    paddingBottom: "40px",
  },
}));

export const List = ({ todos, visibleTodos }) => {
  const classes = useStyles();
  return todos.length > 0 ? (
    <ul className={classes.list}>
      {visibleTodos.map((todo) => (
        <ListItem todo={todo} key={todo.id} />
      ))}
    </ul>
  ) : (
    <div className={classes.noneTodo}>No records found</div>
  );
};
