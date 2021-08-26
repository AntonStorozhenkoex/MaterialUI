import React from "react";
import { Form } from "./Form";
import { List } from "./List";
import { Footer } from "./Footer";
import { Grid } from "@material-ui/core";

export const TodoList = ({ todos, filter, setTodos, visibleTodos }) => (
  <Grid item>
    <Form />
    <List visibleTodos={visibleTodos} setTodo={setTodos} todos={todos} />
    <Footer todos={todos} filter={filter} />
  </Grid>
);
