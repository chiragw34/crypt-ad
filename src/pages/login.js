import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Material UI stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import AccountCircle from "@material-ui/icons/AccountCircleRounded";
import themeFile from "./themes/login_theme";

const styles = {
  ...themeFile
};

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { classes } = this.props;

    const { errors } = this.state;
    const loading = false;

    return (
      <Grid container className={classes.form} spacing={5}>
        <Grid item sm={7} spacing={50}>
          <Card elevation={24} className={classes.card}>
            <AccountCircle className={classes.imgLogo} color="primary" />
            <Typography
              variant="h3"
              className={classes.pageTitle}
              color="textPrimary"
            >
              Login
            </Typography>

            <form noValidate onSubmit={this.handleSubmit}>
              <Card className={classes.card} width={200} elevation={0}>
                <TextField
                  required
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
                  required
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
              </Card>
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
                LOGIN
                {loading && (
                  <CircularProgress
                    className={classes.progress}
                    size={25}
                    color="inherit"
                  />
                )}
              </Button>
              <br />
              <small marginTop="20" className={classes.smallText}>
                don't have an account? Signup <Link to="/signup">here</Link>
              </small>
            </form>
          </Card>
        </Grid>
        <Grid item sm={5}>
          <Card elevation={24} className={classes.card}>
            <AccountCircle className={classes.imgLogo} color="primary" />
            <Typography
              variant="h3"
              className={classes.pageTitle}
              color="textPrimary"
            >
              Login
            </Typography>

            <form noValidate onSubmit={this.handleSubmit}>
              <Card className={classes.card} width={200} elevation={0}>
                <TextField
                  required
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
                  required
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
              </Card>
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
                LOGIN
                {loading && (
                  <CircularProgress
                    className={classes.progress}
                    size={25}
                    color="inherit"
                  />
                )}
              </Button>
              <br />
              <small marginTop="20" className={classes.smallText}>
                don't have an account? Signup <Link to="/signup">here</Link>
              </small>
            </form>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(login);
