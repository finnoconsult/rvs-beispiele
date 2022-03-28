import kennzeichen from './kennzeichen.json';

export function Kennzeichen() {
  const resultKeys = Object.keys(kennzeichen);

  return (
    <div className="container">
      <h1>Kennzeichen</h1>
      <input className="form-control" placeholder="Suchbegriff" />
      <ul className="list-group mt-2">
        {resultKeys.map((key) => (
          <li key={key} className="list-group-item">
            <strong>{key}</strong>: <span>{kennzeichen[key]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
