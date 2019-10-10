import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
// import axios from "axios";

import themeFile from "./util/theme";

// Components
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
// import AuthRoute from "./util/AuthRoute";

// Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup/signup";
import aboutus from "./pages/aboutus";
import newCampaign from "./pages/newCampaign";
import dashboard from "./pages/dsahboard/dashboard";

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

        <Switch>
          <div className="container">
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/aboutus" component={aboutus} />
            <Route exact path="/newCampaign" component={newCampaign} />
          </div>
        </Switch>
        <Switch>
          <div className="dashboard-container">
            <Route exact path="/dashboard" component={dashboard} />
          </div>
        </Switch>
        <div className="footer">
          <Footer />
        </div>
      </Router>
      {/* </Provider> */}
    </MuiThemeProvider>
  );
}

export default App;
