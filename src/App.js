import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import axios from "axios";

import themeFile from "./util/theme";

// Components
import Navbar from "./components/layout/navbar";
// import AuthRoute from "./util/AuthRoute";

// Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import aboutus from './pages/aboutus';
import newCampaign from './pages/newCampaign';

// Redux
// import { Provider } from "react-redux";
// import store from "./redux/store";

const theme = createMuiTheme(themeFile);
console.log(createMuiTheme());
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      {/* <Provider store={store}> */}
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/aboutus" component={aboutus} />
            <Route exact path="/newCampaign" component={newCampaign} />
          </Switch>
        </div>
      </Router>
      {/* </Provider> */}
    </MuiThemeProvider>
  );
}

export default App;
