import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptoHeader = () => (
    <div className="list-header">
      <p className="coin-type">Coin Type</p>
      <div className="usd-euro-container">
        <p className="coin-value">USD</p>
        <p className="coin-value">EURO</p>
      </div>
    </div>
  )

  renderCryptoCurrencyView = () => {
    const {cryptoCurrenciesData} = this.props

    return (
      <div className="crypto-currencies-container">
        {this.renderCryptoHeader()}
        <ul className="crypto-list">
          {cryptoCurrenciesData.map(eachCurrency => (
            <CryptocurrencyItem
              key={eachCurrency.id}
              cryptoCurrencyDetails={eachCurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="crypto-container">
        <h1 className="heading">CryptoCurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-img"
        />
        {this.renderCryptoCurrencyView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
