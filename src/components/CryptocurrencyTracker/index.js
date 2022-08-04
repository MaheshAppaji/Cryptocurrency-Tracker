import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoCurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrencies()
  }

  getCryptoCurrencies = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    // console.log(data)
    const formattedData = data.map(eachCrypto => ({
      currencyLogo: eachCrypto.currency_logo,
      currencyName: eachCrypto.currency_name,
      euroValue: eachCrypto.euro_value,
      id: eachCrypto.id,
      usdValue: eachCrypto.usd_value,
    }))
    this.setState({cryptoCurrenciesData: formattedData, isLoading: false})
  }

  renderCryptoCurrencies = () => {
    const {cryptoCurrenciesData} = this.state

    return <CryptocurrenciesList cryptoCurrenciesData={cryptoCurrenciesData} />
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderCryptoCurrencies()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
