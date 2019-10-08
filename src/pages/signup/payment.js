import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import themeFile from "../themes/signup_theme";

// Material UI stuff
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import MenuItem from "@material-ui/core/MenuItem";

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
export class payment extends Component {
  constructor() {
    super();
    this.state = {
      cardNumber: "",
      month: "",
      year: "",
      verified: false,
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
            <Grid item xs={9}>
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
            <Grid item xs={3} />

            <Grid item xs={4}>
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

            <Grid item xs={3}>
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
            <Grid item xs={5} />
            <Grid item xs={3}>
              <Card className={classes.card} elevation={0}>
                <TextField
                  required
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
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(payment);
