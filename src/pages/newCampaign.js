import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import dayjs from "dayjs";

// Material UI stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import Zoom from "@material-ui/core/Zoom";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Add from "@material-ui/icons/AddRounded";


import themeFile from "./themes/newCapmaign_theme";

const styles = {
  ...themeFile
};

class newCampaign extends Component {
  constructor() {
    super();
    this.state = {
      cStartDate: null,
      cEndDate: null,
      cTimeFrom: null,
			cTimeTill: null,
			cProdDescription: '',
			cLandingUrl:'',
      errors: {}
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleStartDateChange = event => {
    this.setState({
      cStartDate: event
    });
  };

  handleEndDateChange = event => {
    this.setState({
      cEndDate: event
    });
  };

  handleTimeFrom = event => {
    this.setState({
      cTimeFrom: event
    });
  };

  handleTimeTill = event => {
    this.setState({
      cTimeTill: event
    });
  };

  handleImageChange = event => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.uploadImage(formData);
  };

  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    var loading = false;
    return (
      <Fragment>
        <Typography
          variant="h3"
          className={classes.pageTitle}
          color="textPrimary"
        >
          Create a New Campaign
        </Typography>
        <form noValidate onSubmit={this.handleSubmit}>
          <Grid container className={classes.form}>
            <Grid item sm={4}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  required
                  id="cName"
                  name="cName"
                  type="text"
                  label="Campaign Name"
                  helperText={errors.cName}
                  error={errors.cName ? true : false}
                  className={classes.textField}
                  value={this.state.cName}
                  onChange={this.handleChange}
                  variant="outlined"
                  fullWidth
                />
              </Card>
            </Grid>
            <Grid item sm={8} />
            <Grid item sm={4}>
              <Card className={classes.card} elevation={0}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    required
                    id="cStartDate"
                    name="cStartDate"
                    label="Start Date"
                    format="dd/MM/yyyy"
                    className={classes.textField}
                    inputVariant="outlined"
                    variant="inline"
                    value={this.state.cStartDate}
                    onChange={this.handleStartDateChange}
                  />
                </MuiPickersUtilsProvider>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card className={classes.card} elevation={0}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    required
                    id="cEndDate"
                    name="cEndDate"
                    label="End Date"
                    format="dd/MM/yyyy"
                    className={classes.textField}
                    inputVariant="outlined"
                    variant="inline"
                    value={this.state.cEndDate}
                    onChange={this.handleEndDateChange}
                  />
                </MuiPickersUtilsProvider>
              </Card>
            </Grid>
            <Grid item sm={4} />

            <Grid item sm={4}>
              <Card className={classes.card} elevation={0}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardTimePicker
                    required
                    id="cTimeFrom"
                    name="cTimeFrom"
                    label="From"
                    inputVariant="outlined"
                    variant="inline"
                    className={classes.textField}
                    value={this.state.cTimeFrom}
                    onChange={this.handleTimeFrom}
                  />
                </MuiPickersUtilsProvider>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card className={classes.card} elevation={0}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardTimePicker
                    required
                    id="cTimeTill"
                    name="cTimeTill"
                    label="Till"
                    inputVariant="outlined"
                    variant="inline"
                    className={classes.textField}
                    value={this.state.cTimeTill}
                    onChange={this.handleTimeTill}
                  />
                </MuiPickersUtilsProvider>
              </Card>
            </Grid>
            <Grid item sm={4} />

            <Grid item sm={4}>
              <Card className={classes.card} elevation={0}>
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={this.handleEditPicture}
                >
                  <Add /> UPLOAD IMAGE
                </Button>
                <input
                  type="file"
                  id="imageInput"
                  hidden="hidden"
                  onChange={this.handleImageChange}
                />
              </Card>
						</Grid>
						<Grid item sm={8}/>

            <Grid item sm={4}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  required
                  multiline
                  rows="3"
                  id="cProdDescription"
                  name="cProdDescription"
                  type="text"
                  label="Product Description"
                  helperText={errors.cProdDescription}
                  error={errors.cProdDescription ? true : false}
                  className={classes.textField}
                  value={this.state.cProdDescription}
                  onChange={this.handleChange}
                  variant="outlined"
                  fullWidth
                />
              </Card>
            </Grid>
            <Grid item sm={8} />
            <Grid item sm={4}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  required
                  id="cLandingUrl"
                  name="cLandingUrl"
                  type="text"
                  label="Product Landing Url"
                  helperText={errors.cLandingUrl}
                  error={errors.cLandingUrl ? true : false}
                  className={classes.textField}
                  value={this.state.cLandingUrl}
                  onChange={this.handleChange}
                  variant="outlined"
                  fullWidth
                />
              </Card>
            </Grid>
            <Grid item sm={8} />
            <Grid item sm={"12"}>
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
                CREATE
                {loading && (
                  <CircularProgress
                    className={classes.progress}
                    size={25}
                    color="inherit"
                  />
                )}
              </Button>
              <br />
            </Grid>
          </Grid>
        </form>
      </Fragment>
    );
  }
}

export default withStyles(styles)(newCampaign);
