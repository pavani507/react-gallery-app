import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import Gallery from "./Gallery";

import notFound from "./notFound";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            {/*When the app first loads. Cats images are load. */}
            <Route exact path="/" render={props => <Gallery topic="cats" />} />
            <Route
              path="/search/:topic"
              render={props => <Gallery topic={props.match.params.topic} />}
            />
            <Route component={notFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
