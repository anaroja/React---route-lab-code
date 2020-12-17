import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch, Redirect } from "react-router-dom"
import data from './data/stock-data';



class Stocks extends Component {
  render() {

    const stocks = data.map((stock, index) => (
        <li>{stock.name}
         <Link to={`/stocks/${stock.symbol}`}>{stock.symbol}</Link>
        </li>
    ));

    return (
      <div>
          Hello
      {stocks}
    </div>
    );
  }
}

export default Stocks;
