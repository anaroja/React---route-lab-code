import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch, Redirect } from "react-router-dom"
import Home from "./Home.js";
import About from "./About.js";
import Stocks from "./Stocks.js";
import StockInfo from "./StockInfo.js";

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
          {/* this would not work because of the order */}
          {/* <Route path="/stocks" component={Stocks}/>
          <Route path="/stocks/:symbol" render={(routerProps) => <Stocks/>} />
          <Route path="/" render={() => <Redirect to="/stocks" />}/>
          <Route path="/about" component={About}/> */}

          {/* this works with routes because of the order */}
          <Route path="/stocks" exact component={Stocks} />
          <Route path="/about" component={About} />
          <Route path="/stocks/:symbol" render={routerProps => <StockInfo stock={routerProps}/>} />
          <Route path="/" render={() => <Redirect to="/stocks" />} />

        </Switch>
      </main>
    </div>
    );
  }
}

export default App;
