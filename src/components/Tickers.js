
import React, { Component } from 'react';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';
import axios from 'axios';

class Tickers extends Component {

	constructor(props) {
		super(props);
		this.state = {
      data: [
      // {
      //   id: "bitcoin",
      //   name: "Bitcoin",
      //   symbol: "BTC",
      //   price_usd: "1",
      //   percent_change_1h: "0",
      //   percent_change_24h: "0",
      //   percent_change_7d: "0",
      // },
      // {
      //   id: "ethereum",
      //   name: "Ethereum",
      //   symbol: "ETH",
      //   price_usd: "1",
      //   percent_change_1h: "0",
      //   percent_change_24h: "0",
      //   percent_change_7d: "0",
      // },
      // {
      //   id: "litecoin",
      //   name: "Litecoin",
      //   symbol: "LTC",
      //   price_usd: "1",
      //   percent_change_1h: "0",
      //   percent_change_24h: "0",
      //   percent_change_7d: "0",
      // }
      ]
    };
  }

  componentDidMount() {
    this.fetchCryptocurrencyData()
    this.interval = setInterval(() => this.fetchCryptocurrencyData(), 10 * 2000);
  }

  fetchCryptocurrencyData() {
    axios.get("https://api.coinmarketcap.com/v1/ticker/")
    .then(response => {
      console.log(response)
      var wanted = ["bitcoin", "ethereum", "ripple", "bitcoin-cash", "litecoin", "cardano", "neo", "stellar", "eos", "dash", "iota", "monero", "nem", "ethereum-classic", "vechain", "tron", "lisk", "tether", "bitcoin-gold", "omisego", "nano", "icon", "zcash", "binance-coin", "steem", "verge", "bytecoin-bcn", "populous", "stratis", "dogecoin"];
      var result = response.data.filter(currency => wanted.includes(currency.id));
      this.setState({ data: result});
    })
    .catch(err => console.log(err));
  }


  render() {
    var tickers = this.state.data.map((currency) =>
     <Cryptocurrency data={currency} key={currency.id}/>
     );
    return(
     <div className="tickers-container">
     <ul className="tickers">{tickers}</ul>
     <p>Info updated every 20 seconds.</p>
     </div>
     );
  }
}

export default Tickers;