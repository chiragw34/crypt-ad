import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Card from "@material-ui/core/Card";
import themeFile from '../themes/dashboard_theme';

const styles = {
    ...themeFile,
}

class dashboard extends Component {
    render() {
        const { classes } = this.props;

        // const { errors } = this.state;
        const loading = false;
        return (
            <Card elevation={10}>
                <h1 color='white'>hello</h1>
            </Card>
        );
    }
}

export default withStyles(styles)(dashboard);
