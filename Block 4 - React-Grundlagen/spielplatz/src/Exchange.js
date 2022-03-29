import { useState } from 'react';
import json from './rates';

function Rate({ currency, value, onChange }) {
  const handleChange = (event) => onChange(currency, +event.target.value);

  return (
    <div className="input-group mb-2 text-monospace">
      <div className="input-group-prepend">
        <div className="input-group-text">{currency}</div>
      </div>
      <input
        type="number"
        className="form-control"
        value={value}
        onChange={handleChange}
        style={{ textAlign: 'right', fontFamily: 'monospace' }}
      />
    </div>
  );
}

const prettyRound = (value) => Math.round(value * 100) / 100;

export function Exchange() {
  const [euro, setEuro] = useState(100);
  const currencies = Object.keys(json.rates);
  const onChange = (currency, value) => setEuro(value / json.rates[currency]);

  return (
    <>
      <h2>Währungsrechner zu EUR</h2>
      {currencies.map((currency) => (
        <Rate key={currency} currency={currency} value={prettyRound(euro * json.rates[currency])} onChange={onChange} />
      ))}
    </>
  );
}
