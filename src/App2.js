import React from "react";
import Header from "./components/Header2";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App2.scss";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/opportunites" component={Opportunites} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/contact-us" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="reveal">
          <h5>
            The <b>HAMBRG</b>, is a creative, engineer driven, global agency
            working on advancing the software, advertising and design
            communities to new heights.
          </h5>
        </div>
      </div>
    </div>
  );
};

const Opportunites = () => {
  return <p>Discover our numerous opportunities</p>;
};

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

export default App;
