import React from "react";
import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
         
            <Switch>
              
              <Route path="/chat">
                <h1>Hello Chat</h1>
              </Route>
              <Route path="/cards">
                <TinderCards />
              </Route>
              <Route path="/">
                <h1>Hello Home page</h1>
              </Route>
            </Switch>
          </Router>

        {/*Tinder cards to swap*/}
        {/*Bellow Button tinder cards*/}
        {/*Chat screen */}
        {/* Chat individual screen */}
    </div>
  );
}

export default App;
