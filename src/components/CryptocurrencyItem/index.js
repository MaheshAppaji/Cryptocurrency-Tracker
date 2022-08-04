import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyDetails} = props
  const {
    currencyLogo,
    currencyName,
    euroValue,
    usdValue,
  } = cryptoCurrencyDetails

  return (
    <li className="list-container">
      <div className="logo-title-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
