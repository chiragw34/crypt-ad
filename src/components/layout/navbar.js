import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

// Material UI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

class navbar extends Component {
  render() {
    let authenticated = !false;
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              <div>
              <Button color="inherit" component={Link} to="/">
                CRYPT-AD
              </Button>
              <Button color="inherit" component={Link} to="/aboutus">
                About us
              </Button>
              </div>

              <Button color="inherit" component={Link} to="/login" >
                Username
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <Button color="inherit" component={Link} to="/">
                CRYPT-AD
              </Button>
              <Button color="inherit" component={Link} to="/aboutus">
                About us
              </Button>
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

export default navbar;
