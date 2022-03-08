import { useState } from 'react';
import exchangeRates from './exchange-rates.json';

const currencyKeys = Object.keys(exchangeRates.rates);

function Rate({ currency, value, handleChange }) {
  const onChange = (event) => handleChange(+event.target.value);

  return (
    <div className="input-group mb-2 text-monospace">
      <div className="input-group-prepend">
        <div className="input-group-text">{currency}</div>
      </div>
      <input type="number" className="form-control" value={value} onChange={onChange} />
    </div>
  );
}

export function Exchange() {
  const [euro, setEuro] = useState(100);
  const computeValue = (key) => Math.round(euro * exchangeRates.rates[key]);
  const handleChange = (key, value) => setEuro(Math.round(value / exchangeRates.rates[key]));

  return (
    <div className="container my-2">
      <h2>Währungsrechner zu EUR</h2>

      {currencyKeys.map((exchangeKey) => (
        <Rate
          key={exchangeKey}
          currency={exchangeKey}
          value={computeValue(exchangeKey)}
          handleChange={(value) => handleChange(exchangeKey, value)}
        />
      ))}
    </div>
  );
}
