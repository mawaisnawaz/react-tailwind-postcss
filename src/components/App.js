import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
