import kennzeichen from './kennzeichen.json';

function App() {
  // TODO: zeichen als state
  const zeichen = Object.keys(kennzeichen);
  // input onChange handler hinzufügen
  // im handler zeichen nach suchbegriff reduzieren
  // siehe https://github.com/finnoconsult/rvs-beispiele/blob/main/Block%203%20-%20Dynamische%20Seiten%20-%20Frontend/autocomplete.html

  return (
    <div className="container">
      <h1>Kennzeichen</h1>
      <input className="form-control" placeholder="Suchbegriff" />
      <ul className="list-group mt-2">
        {zeichen.map((z) => (
          <li key={z} className="list-group-item">
            <strong>{z}</strong>: <span>{kennzeichen[z]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
