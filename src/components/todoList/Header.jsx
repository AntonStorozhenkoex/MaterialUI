import React from "react";
import { Grid, Typography } from "@material-ui/core";

export const Header = () => (
  <Grid container justifyContent="center">
    <Typography variant="h5" component="h6">
      TodoList
    </Typography>
  </Grid>
);
