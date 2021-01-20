import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contributor from "./pages/Contributor";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/index";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import Sidebar from "../src/components/Sidebar/index";
import "./tailwind.output.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route path="/" exact component={Home} />
        <Route path="/contributor" component={Contributor} />
        <Route path="/user-detail/:id" component={Details} />
      </Switch>
    </Router>
  );
};

export default App;
