import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../redux/todos/action";
import { TextField, Grid } from "@material-ui/core";

export const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addNewTodo(inputValue));
    setInputValue("");
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Grid container justifyContent="space-between">
        <TextField
          fullWidth
          placeholder="Enter new value"
          margin="normal"
          value={inputValue}
          onChange={(e) => changeInputValue(e)}
        />
      </Grid>
    </form>
  );
};
