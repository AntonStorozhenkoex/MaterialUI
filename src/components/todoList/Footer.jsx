import React from "react";
import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
} from "../../redux/filter/types";
import { useDispatch } from "react-redux";
import { deleteAllTodo } from "../../redux/todos/action";
import { changeFilterAction } from "../../redux/filter/action";
import { Button, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((them) => ({
  footerButton: {
    padding: "3px 3px 3px 3px",
    width: "100px",
    marginBottom: "10px",
    height: "30px",
  },
}));
export const Footer = ({ filter }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <footer>
      <Grid container>
        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
          <Button
            className={classes.footerButton}
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
            className={classes.footerButton}
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
            className={classes.footerButton}
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
            className={classes.footerButton}
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
