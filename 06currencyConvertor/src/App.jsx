import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css'

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo);


  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
  setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    
    <div className="main-container">
    <div className="background-image" style={{backgroundImage: `url('https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}></div>
    <div className="content-container">
        <div className="form-container">
            <form onSubmit={(e) => {
                e.preventDefault();
                convert();
            }}>
                <div className="input-box">
                <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                />  
                </div>
                <div className="swap-button">
                    <button type="button" onClick={swap}>Swap</button>
                </div>
                <div className="input-box">
                <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
                />  
                </div>
                <button type="submit" onClick={convert}>
                Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
        </div>
    </div>
</div>
);
}

export default App
