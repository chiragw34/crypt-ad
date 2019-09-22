import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import themeFile from "../util/theme";

// Material UI stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import Zoom from "@material-ui/core/Zoom";

const styles = {
  ...themeFile,
  pageTitle: {
    textAlign: "center",
    padding: 5,
    margin: "5px auto 10px auto"
  },
  root: {
    flexGrow: 1
  },
  bottom: {
    textAlign:'center'
  },
  card: {
    shadow: 'none',
    padding: 20,
    margin: 5,
    elevation: 0,
    shadows:'none'
  },


};

class signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      handle: "",
      errors: {}
    };
  }

  render() {
    const { classes } = this.props;
    // const { errors } = this.state;
    const errors = [];
    var loading = false;
    return (
      <div className={classes.root} onTransitionEnd={Zoom}>
        <Grid container className={classes.form} spacing={1} border="1">
          <Grid item xs={12} className={classes.pageTitle}>
            <Typography variant="h3" color="textPrimary">
              Sign Up
            </Typography>
          </Grid>
        </Grid>

        <form noValidate onSubmit={this.handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  id="firstName"
                  name="firstName"
                  type="text"
                  label="First Name"
                  helperText={errors.firstName}
                  error={errors.firstName ? true : false}
                  className={classes.textField}
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  fullWidth
                />
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  helperText={errors.email}
                  error={errors.email ? true : false}
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.handleChange}
                  fullWidth
                />
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  helperText={errors.password}
                  error={errors.password ? true : false}
                  className={classes.textField}
                  value={this.state.password}
                  onChange={this.handleChange}
                  fullWidth
                />
                <TextField
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  helperText={errors.confirmPassword}
                  error={errors.confirmPassword ? true : false}
                  className={classes.textField}
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                  fullWidth
                />
                <TextField
                  id="handle"
                  name="handle"
                  type="text"
                  label="Handle"
                  helperText={errors.handle}
                  error={errors.handle ? true : false}
                  className={classes.textField}
                  value={this.state.handle}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  id="lastName"
                  name="lastName"
                  type="text"
                  label="Last Name"
                  helperText={errors.lastName}
                  error={errors.lastName ? true : false}
                  className={classes.textField}
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  fullWidth
                />
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  helperText={errors.email}
                  error={errors.email ? true : false}
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.handleChange}
                  fullWidth
                />
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  helperText={errors.password}
                  error={errors.password ? true : false}
                  className={classes.textField}
                  value={this.state.password}
                  onChange={this.handleChange}
                  fullWidth
                />
                <TextField
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  helperText={errors.confirmPassword}
                  error={errors.confirmPassword ? true : false}
                  className={classes.textField}
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                  fullWidth
                />
                <TextField
                  id="handle"
                  name="handle"
                  type="text"
                  label="Handle"
                  helperText={errors.handle}
                  error={errors.handle ? true : false}
                  className={classes.textField}
                  value={this.state.handle}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Card>
            </Grid>
            <Grid item xs={12} className={classes.bottom}>
              {errors.general && (
                <Typography variant="body2" className={classes.customError}>
                  {errors.general}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Signup
                {loading && (
                  <CircularProgress
                    className={classes.progress}
                    size={25}
                    color="inherit"
                  />
                )}
              </Button>
              <br />
              <small marginTop="20">
                Already have an account? Login <Link to="/login">here</Link>
              </small>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(signup);
