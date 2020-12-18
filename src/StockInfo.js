import React, { Component } from "react";
import "./App.css";
import axios from 'axios';

class StockInfo extends Component {

    state = {
        lastPrice : '',
        securityType : ''
    }

    componentDidMount() {
        // POST request using axios with set headers
        const stockSymbol = this.props.stock.match.params.symbol
        axios.get(`https://api.iextrading.com/1.0/tops?symbols=${stockSymbol}`)
            .then(response => this.setState({ lastPrice: response.data[0].lastSalePrice, securityType: response.data[0].securityType }))
            .catch(err => console.warn(err));;
    }
    
    render() {

    const stockSymbol = this.props.stock.match.params.symbol

    return (
      <div>
          <h1>{stockSymbol}</h1>
          <li>

      {this.state.lastPrice}
          </li>
          <li>
      {this.state.securityType}

          </li>

    </div>
    );
  }
}

export default StockInfo;
