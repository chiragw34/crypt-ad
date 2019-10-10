import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

// Material UI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Add from "@material-ui/icons/AddRounded";

import themeFile from "../../util/theme";
const styles = {
  ...themeFile,
  title: {
    textDeoration: "none",
    padding: "5px 5px 0px 5px",
    margin: "5px 20px 0px 10px"
  },
  root: {
    flexGrow: 1,
    margin: "5px 0px 0px 0px"
  }
};

class navbar extends Component {
  render() {
    const { classes } = this.props;
    let authenticated = !false;
    return (
      <AppBar elevation={24}>
        <Toolbar className={classes.root} width="100%">
          {authenticated ? (
            <Fragment>
              <div className={classes.root}>
                <Typography
                  variant="h3"
                  color="inherit"
                  component={Link}
                  to="/"
                  className={classes.title}
                >
                  Crypt-Ad
                </Typography>
                <Typography
                  variant="h6"
                  color="inherit"
                  component={Link}
                  to="/dashboard"
                  className={classes.title}
                >
                  Dashboard
                </Typography>
                <Typography
                  color="inherit"
                  variant="h6"
                  component={Link}
                  to="/aboutus"
                  className={classes.title}
                >
                  About us
                </Typography>
              </div>
              <Button color="inherit" component={Link} to="/login">
                Username
              </Button>

              <Button
                color="inherit"
                component={Link}
                to="/newCampaign"
                variant="outlined"
              >
                <Add /> New Campaign
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <div className={classes.root}>
                <Typography
                  variant="h3"
                  color="inherit"
                  component={Link}
                  to="/"
                  className={classes.title}
                >
                  Crypt-Ad
                </Typography>
                <Typography
                  color="inherit"
                  variant="h5"
                  component={Link}
                  to="/aboutus"
                  className={classes.title}
                >
                  About us
                </Typography>
              </div>
              <Button color="inherit" component={Link} to="/signup">
                SignUp
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(navbar);
