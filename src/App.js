import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import GalleryContainer from "./GalleryContainer";

import notFound from "./notFound";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            {/*When the app first loads. Cats images are load. */}
            <Route
              exact
              path="/"
              render={props => <GalleryContainer topic="cats" />}
            />
            <Route
              exact
              path="/cats"
              render={props => <GalleryContainer topic="cats" />}
            />
            <Route
              exact
              path="/dogs"
              render={props => <GalleryContainer topic="dogs" />}
            />
            <Route
              exact
              path="/computers"
              render={props => <GalleryContainer topic="computers" />}
            />
            <Route
              exact
              path="/rainbows"
              render={props => <GalleryContainer topic="rainbows" />}
            />
            <Route
              path="/search/:topic"
              render={props => (
                <GalleryContainer topic={props.match.params.topic} />
              )}
            />
            <Route component={notFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
