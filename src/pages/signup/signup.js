import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from 'react-router-dom';

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
// import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Address from "./address";
import Credentials from "./credentials";
import Payment from "./payment";
import Card from "@material-ui/core/Card";
import themeFile from "../themes/signup_theme";
import AccountCircle from "@material-ui/icons/AccountCircleRounded";

const styles = {
  ...themeFile,
};

const steps = ["Credentials", "Address details", "Payment "];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Credentials />;
    case 1:
      return <Address />;
    case 2:
      return <Payment />;
    default:
      throw new Error("Unknown step");
  }
}

class signup extends Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0,
      setActiveStep: 0
    };
  }

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <CssBaseline />
        <Card elevation={24} className={classes.main}>
          <Paper align="center" elevation={0}>
            <AccountCircle color="primary" className={classes.imgLogo} />
            <Typography className={classes.title} variant="h3" align="center">
              Sign up
            </Typography>
            <Stepper activeStep={this.state.activeStep}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Fragment>
              {this.state.activeStep === steps.length ? (
                <Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </Fragment>
              ) : (
                <Fragment>
                  {getStepContent(this.state.activeStep)}
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {this.state.activeStep === steps.length - 1
                        ? "Sign up"
                        : "Next"}
                    </Button>
                    {this.state.activeStep !== 0 && (
                      <Button
                        onClick={this.handleBack}
                        color="secondary"
                        className={classes.button}
                      >
                        Back
                      </Button>
                    )}
                  </div>
                </Fragment>
              )}
            </Fragment>
          </Paper>
        </Card>
        <Card elevation={0} className={classes.small}>
          <Paper align="center">
            <small className={classes.smallText}>
              Already have an account? Login <Link to="/login">here</Link>
            </small>
          </Paper>
        </Card>
      </Fragment>
    );
  }
}

export default withStyles(styles)(signup);
