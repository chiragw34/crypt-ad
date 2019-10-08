import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import themeFile from "../themes/signup_theme";

// Material UI stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutlineRounded";

const styles = {
  ...themeFile,
};

class credentials extends Component {
  constructor() {
    super();
    this.state = {
      role: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      otp: "",
      verified: false,
      errors: {},
      loading: false
    };
  }

  toogled = () => {
    return this.setState({ verified: true });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    // var loading = false;
    return (
      <div className={classes.root}>
        <form noValidate onSubmit={this.handleSubmit}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Card className={classes.card} elevation={0}>
                <Typography variant="h6" color="textPrimary">
                  Select your role :
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card} elevation={0}>
                <FormControl component="fieldset">
                  <RadioGroup
                    value={this.value}
                    onChange={this.handleChange}
                    row
                  >
                    <FormControlLabel
                      value="Advertiser"
                      name="role"
                      control={<Radio color="primary" />}
                      label="Advertiser"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value="publisher"
                      name="role"
                      control={<Radio color="primary" />}
                      label="Publisher"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value="both"
                      name="role"
                      control={<Radio color="primary" />}
                      label="Both"
                      labelPlacement="bottom"
                    />
                  </RadioGroup>
                </FormControl>
              </Card>
            </Grid>

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
              </Card>
            </Grid>

            <Grid item xs={7}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="E-mail"
                  helperText={errors.email}
                  error={errors.email ? true : false}
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card} elevation={0}>
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
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card} elevation={0}>
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
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  label="Phone Number"
                  helperText={errors.phoneNumber}
                  error={errors.phoneNumber ? true : false}
                  className={classes.textField}
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Card>
            </Grid>

            <Grid item xs={2}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  id="otp"
                  name="otp"
                  type="text"
                  label="OTP"
                  helperText={errors.otp}
                  error={errors.otp ? true : false}
                  className={classes.textField}
                  value={this.state.otp}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Card>
            </Grid>

            <Grid item xs={2}>
              <Card className={classes.card} elevation={0}>
                {this.state.verified ? (
                  <CheckCircleOutlineIcon color="primary" fontSize="large" />
                ) : (
                  <CircularProgress color="primary" />
                )}
              </Card>
            </Grid>

            <Grid item xs={2}>
              <Card className={classes.card} elevation={0}>
                <Button onClick={this.toogled}>toogle</Button>
              </Card>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(credentials);
