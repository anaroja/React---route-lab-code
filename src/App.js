import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch, Redirect } from "react-router-dom"
import Home from "./Home.js";
import About from "./About.js";
import Stocks from "./Stocks.js";





class App extends Component {

  render() {
    console.log(this.props.data);
    return (
      <div>
        <nav>
        <Link to="/" >
        <img
          src="https://g.foolcdn.com/editorial/images/605028/stock-up-glowing-green-arrow-climbs-on-a-stock-screen.jpg"
          alt=""
        />
        <h1>Home</h1>

        </Link>
        <Link to="/about" >
        <h1>About</h1>
        </Link>
        </nav>
      <main>
        <Switch>
          <Route path="/stocks" component={Stocks}/>
          <Route path="/stocks/:symbol" render={(routerProps) => <Stocks/>} />
          <Route path="/" render={() => <Redirect to="/stocks" />}/>
          <Route path="/about" component={About}/>

        </Switch>
      </main>
    </div>
    );
  }
}

export default App;
