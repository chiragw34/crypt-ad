import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import themeFile from "./themes/signup_theme";

// Material UI stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import Zoom from "@material-ui/core/Zoom";
import MenuItem from "@material-ui/core/MenuItem";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutlineRounded";

const styles = {
  ...themeFile
};

const months = [
  {
    value: "January",
    label: "January"
  },
  {
    value: "February",
    label: "February"
  },
  {
    value: "March",
    label: "March"
  },
  {
    value: "April",
    label: "April"
  },
  {
    value: "May",
    label: "May"
  },
  {
    value: "June",
    label: "June"
  },
  {
    value: "July",
    label: "July"
  },
  {
    value: "August",
    label: "August"
  },
  {
    value: "September",
    label: "September"
  },
  {
    value: "October",
    label: "October"
  },
  {
    value: "November",
    label: "November"
  },
  {
    value: "December",
    label: "December"
  }
];

const years = [
  {
    value: "2019",
    label: "2019"
  },
  {
    value: "2020",
    label: "2020"
  },
  {
    value: "2021",
    label: "2021"
  },
  {
    value: "2022",
    label: "2022"
  },
  {
    value: "2023",
    label: "2023"
  },
  {
    value: "2024",
    label: "2024"
  }
];

class signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      flatNo: "",
      buildingName: "",
      roadName: "",
      area: "",
      town: "",
      stateName: "",
      pincode: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      otp: "",
      cardNumber: "",
      month: "",
      year: "",
      verified: false,
      errors: {}
    };
  }
  toogled = event => {
    return this.setState({ verified: true });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    // const { errors } = this.state;
    const errors = [];
    var loading = false;

    return (
      <div className={classes.root} transition={Zoom}>
        <Grid container className={classes.form} spacing={1} border="1">
          <Grid item xs={12} className={classes.pageTitle}>
            <Typography
              variant="h3"
              color="textPrimary"
              className={classes.subTitle}
            >
              Sign Up
            </Typography>
          </Grid>
        </Grid>

        <form noValidate onSubmit={this.handleSubmit}>
          <Grid container spacing={0}>
            <Grid item xs={12} className={classes.subTitle}>
              <Typography variant="h6" color="primary">
                Name
              </Typography>
              <hr className={classes.underline} />
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
            <Grid item xs={12} className={classes.subTitle}>
              <Typography variant="h6" color="primary">
                Address
              </Typography>
              <hr className={classes.underline} />
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  id="flatNo"
                  name="flatNo"
                  type="text"
                  label="Flat/Floor/Block no."
                  helperText={errors.flatNo}
                  error={errors.flatNo ? true : false}
                  className={classes.textField}
                  value={this.state.flatNo}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  id="buildingName"
                  name="buildingName"
                  type="text"
                  label="Name of Building/Coop./Housing Society"
                  helperText={errors.buildingName}
                  error={errors.buildingName ? true : false}
                  className={classes.textField}
                  value={this.state.buildingName}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  id="roadName"
                  name="roadName"
                  type="text"
                  label="Road/Street/Lane"
                  helperText={errors.roadName}
                  error={errors.roadName ? true : false}
                  className={classes.textField}
                  value={this.state.roadName}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  id="area"
                  name="area"
                  type="text"
                  label="Area/Locality/Taluka/Sub-division"
                  helperText={errors.area}
                  error={errors.area ? true : false}
                  className={classes.textField}
                  value={this.state.area}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  id="town"
                  name="town"
                  type="text"
                  label="Town/City/District"
                  helperText={errors.town}
                  error={errors.town ? true : false}
                  className={classes.textField}
                  value={this.state.town}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  id="stateName"
                  name="stateName"
                  type="text"
                  label="State/Union Territory"
                  helperText={errors.stateName}
                  error={errors.stateName ? true : false}
                  className={classes.textField}
                  value={this.state.stateName}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  id="pincode"
                  name="pincode"
                  type="text"
                  label="Pincode"
                  helperText={errors.pincode}
                  error={errors.pincode ? true : false}
                  className={classes.textField}
                  value={this.state.pincode}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Card>
            </Grid>
            <Grid item xs={12} className={classes.subTitle}>
              <Typography variant="h6" color="primary">
                Credentials
              </Typography>
              <hr className={classes.underline} />
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

            <Grid item xs={12} className={classes.subTitle}>
              <Typography variant="h6" color="primary">
                Payments
              </Typography>
              <hr className={classes.underline} />
            </Grid>

            <Grid item xs={10}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  label="Card Number"
                  helperText={errors.cardNumber}
                  error={errors.cardNumber ? true : false}
                  className={classes.textField}
                  value={this.state.cardNumber}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  id="month"
                  name="month"
                  select
                  label="Month"
                  className={classes.textField}
                  value={this.state.month}
                  onChange={this.handleChange}
                  fullWidth
                >
                  {months.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Card>
            </Grid>

            <Grid item xs={2}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  id="year"
                  name="year"
                  select
                  label="Year"
                  className={classes.textField}
                  value={this.state.year}
                  onChange={this.handleChange}
                  fullWidth
                >
                  {years.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Card>
            </Grid>

            <Grid item xs={2}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  id="cvv"
                  name="cvv"
                  type="password"
                  label="CVV"
                  helperText={errors.cvv}
                  error={errors.cvv ? true : false}
                  className={classes.textField}
                  value={this.state.cvv}
                  onChange={this.handleChange}
                  fullWidth
                />
              </Card>
            </Grid>
            <Grid item xs={12} className={classes.bottom}>
              <Card className={classes.card} elevation={0}>
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
                <small className={classes.smallText}>
                  Already have an account? Login <Link to="/login">here</Link>
                </small>
              </Card>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(signup);
