import React, {useId} from 'react';
import './component.css'

function InputBox({
  label,
  amount,
  amountDisabled = false,
  currencyDisable = false,
  currencyOptions = [],
  onAmountChange,
  selectCurrency = 'usd',
  onCurrencyChange,
}) {

  const amountInputId = useId()
  return (
    <div className="custom-container">
    <div className="custom-container-left">
        <label className="custom-label" htmlFor={amountInputId}>{label}</label>
        <input 
        className="custom-input" 
        id={amountInputId} type="number" 
        placeholder="Amount" 
        disabled={amountDisabled} 
        value={amount} 
        onChange={(e) => onAmountChange &&
        onAmountChange(Number(e.target.value))} />
    </div>
    <div className="custom-container-right">
        <p className="custom-paragraph">Currency Type</p>
        <select className="custom-select"
        value={selectCurrency} 
        disabled={currencyDisable} 
        onChange={(e) => onCurrencyChange &&
        onCurrencyChange(e.target.value)}>
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
          {currency}
          </option>
        ))}
        </select>
    </div>
  </div>
  )
}


export default InputBox;