import React from "react";
import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
} from "../../redux/filter/types";
import { useDispatch } from "react-redux";
import { deleteAllTodo } from "../../redux/todos/action";
import { changeFilterAction } from "../../redux/filter/action";
import { Button, Grid } from "@material-ui/core";

export const Footer = ({ filter }) => {
  const dispatch = useDispatch();
  return (
    <footer>
      <Grid container>
        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            title="Clear"
            filter={filter}
            onClick={() => dispatch(deleteAllTodo())}
          >
            Clear
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => dispatch(changeFilterAction(SHOW_ALL))}
          >
            All
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => dispatch(changeFilterAction(SHOW_COMPLETED))}
          >
            Completed
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => dispatch(changeFilterAction(SHOW_ACTIVE))}
          >
            In Progress
          </Button>
        </Grid>
      </Grid>
    </footer>
  );
};
