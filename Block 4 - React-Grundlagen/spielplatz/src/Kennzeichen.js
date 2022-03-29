import { useState } from 'react';
import kennzeichen from './kennzeichen.json';

export function Kennzeichen() {
  const [query, setQuery] = useState('');
  const handleChange = (event) => setQuery(event.target.value.toLowerCase());
  const resultKeys = Object.keys(kennzeichen);
  const filteredKeys = resultKeys.filter(
    (key) => key.toLowerCase().startsWith(query) || kennzeichen[key].toLowerCase().startsWith(query)
  );

  return (
    <div className="container">
      <h1>Kennzeichen</h1>
      <input className="form-control" placeholder="Suchbegriff" onChange={handleChange} />
      <ul className="list-group mt-2">
        {filteredKeys.map((key) => (
          <li key={key} className="list-group-item">
            <strong>{key}</strong>: <span>{kennzeichen[key]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
