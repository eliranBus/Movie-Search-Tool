import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Movie from "./components/Movie";
import SearchMovies from "./components/SearchMovies";
import Signature from "./components/Signature";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SearchMovies />
        </Route>
        <Route path="/movie-info/:movieTitle">
          <Movie />
        </Route>
      </Switch>
      <Signature />
    </div>
  );
}

export default App;
