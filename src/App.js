import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";

const App = () => {
  return (
      <BrowserRouter>

          <Switch>

              <Route path="/" exact component={Home} />
              <Route path="/jobs" exact component={Jobs} />

          </Switch>

      </BrowserRouter>
  );
};

export default App;

