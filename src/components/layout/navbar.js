import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

// Material UI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

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
  }
};

class navbar extends Component {
  render() {
    const { classes } = this.props;
    let authenticated = false;
    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar className="nav-container" width="100%">
            {authenticated ? (
              <Fragment>
                <div className={classes.root}>
                  <Typography
                    variant="h4"
                    color="inherit"
                    component={Link}
                    to="/"
                    className={classes.title}
                  >
                    CRYPT-AD
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
                <Button color="inherit" component={Link} to="/login">
                  Username
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <div className={classes.root}>
                  <Typography
                    variant="h4"
                    color="inherit"
                    component={Link}
                    to="/"
                    className={classes.title}
                  >
                    CRYPT-AD
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
      </div>
    );
  }
}

export default withStyles(styles)(navbar);
