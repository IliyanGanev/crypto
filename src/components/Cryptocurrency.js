import React, { Component } from 'react';
import './Cryptocurrency.css';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';


class Cryptocurrency extends Component {

	render() {
		var { id, name, symbol, price_usd, percent_change_1h, percent_change_24h, percent_change_7d, total_supply, market_cap_usd,
		} = this.props.data;

		function average(a,b,c) {
			return ((Number(a)+Number(b)+Number(c))/3).toFixed(2);
		}

		// "Market Capitalization is one way to rank the relative size of a cryptocurrency. It's calculated by multiplying the Price by the Circulating Supply. 
		//Market Cap = Price X Circulating Supply.
		//Circulating Supply is a much better metric than Total supply, for determining the market capitalization.
		// The method of using the Circulating Supply is analogous to the method of using public float for determining the market capitalization of companies in traditional investing."

		function circulatingSupply(price_usd, market_cap_usd) {
			let circulating = Number(market_cap_usd) / Number(price_usd);
			return circulating.toFixed(1);
		}

		return (
			<li className={"cryptocurrency " +id}>
				<div className="namediv">
					<p className="cryptocurrency-name">{name} ({symbol})</p>
				</div>
				<div className="pricediv">
					<h1>${ (+price_usd).toFixed(2) }</h1>
				</div>
				<div className="percentage1hrdiv">
					<p className="percentage_change">{ (+percent_change_1h).toFixed(2)}% 1hr </p>
				</div>
				<div className="percentage24hrdiv">
					<p className="percentage_change">{ (+percent_change_24h).toFixed(2)}% 24hrs</p>
				</div>
				<div className="percentage7div">
					<p className="percentage_change">{ (+percent_change_7d).toFixed(2)}% 7days</p>
				</div>
				<div className="spark">
					<Sparklines width={100} height={20} margin={5} data={[percent_change_1h, percent_change_24h, percent_change_7d]}>
						<SparklinesLine color="#1dc6df"  />
				 		<SparklinesSpots />
				  	<SparklinesReferenceLine type="avg" />
					</Sparklines>
				</div>
				<div className="rotated">
					<p className="average">{average(percent_change_1h,percent_change_24h,percent_change_7d)} % avg</p>
				</div>
				<div className="supply_div">
					<p className="total_supply">total supply: {total_supply ? total_supply : 0}</p>
					<p className="circulating_supply">circulating supply: {circulatingSupply(price_usd, market_cap_usd)}</p>
				</div>
			</li>
		);
	}
}

export default Cryptocurrency; 

       