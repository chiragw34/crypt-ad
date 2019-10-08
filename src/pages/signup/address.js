import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import themeFile from "../themes/signup_theme";

// Material UI stuff
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";

const styles = {
  ...themeFile,
};

class address extends Component {
  constructor() {
    super();
    this.state = {
      flatNo: "",
      buildingName: "",
      roadName: "",
      area: "",
      town: "",
      stateName: "",
      pincode: "",
      errors: {},
      loading: false
    };
  }

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

            <Grid item xs={5}>
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

            <Grid item xs={3} />
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
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(address);
