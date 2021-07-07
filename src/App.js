import SignIn from "./components/Login";
import Navbar from "./components/Navbar";
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <SignIn />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
