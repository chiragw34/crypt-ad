import React, { Component } from "react";
import { Link } from "react-router-dom";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import themeFile from "../../util/theme";
const styles = {
  ...themeFile,
  title: {
    textDeoration: "none",
    padding: 5,
    margin: "5px 20px 5px 10px"
  },
  root: {
    flexGrow: 1
  },
  footer: {
    padding: 10,
    marginTop: 50
  },
  hr: {
    boxShadow: "0px 20px 20px 5px",
    color: "#81d4fa",
    border: "none"
  },
  bigFooter: {}
};

class footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        className={classes.footer}
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item sm={12}>
          <Card elevation={0}>
            <Typography className={classes.bigFooter} variant="h5">
              Thanks for bla bla...
            </Typography>
            <hr className={classes.hr} />
          </Card>
        </Grid>
        <Grid item sm={9}>
          <Typography className={classes.pageTitle} color="textPrimary">
            2019 Creative CW.
          </Typography>
        </Grid>
        <Grid item sm>
          <Link to="/aboutus">About us</Link>
        </Grid>
        <Grid item sm>
          <Link to="/signup">Sign up</Link>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(footer);
