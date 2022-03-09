import { useState, useEffect, useRef } from 'react';

const toTitleCase = (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();

const randomTimeout = (data) => new Promise((resolve) => setTimeout(resolve, Math.random() * 5000, data));

const STATES = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  REJECTED: 'REJECTED',
  RESOLVED: 'RESOLVED',
};

export function Pokedex() {
  const [pokeId, setPokeId] = useState(null);

  return (
    <div className="container mt-2" style={{ width: 300 }}>
      <PokeSearch value={pokeId} onChange={setPokeId} />

      <div className="btn-toolbar">
        <span className="btn-sm">e.g.</span>
        <div className="btn-group mb-1">
          <button className="btn btn-link btn-sm" type="button" onClick={() => setPokeId(25)}>
            Pikachu
          </button>
          <button className="btn btn-link btn-sm" type="button" onClick={() => setPokeId(39)}>
            Jigglypuff
          </button>
          <button className="btn btn-link btn-sm" type="button" onClick={() => setPokeId(150)}>
            Mewtwo
          </button>
        </div>
      </div>

      {pokeId && <PokeData pokeId={pokeId} />}
    </div>
  );
}

function PokeSearch({ value, onChange }) {
  const inputRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    onChange(inputRef.current.value);
  };

  useEffect(() => {
    inputRef.current.value = value;
  }, [value]);

  return (
    <form onSubmit={onSubmit} className="mb-2">
      <div className="input-group is-invalid">
        <div className="input-group-prepend">
          <span className="input-group-text">Poke-ID</span>
        </div>
        <input ref={inputRef} type="number" className="form-control" />
        <div className="input-group-append">
          <button className="btn btn-secondary" type="submit">
            Suchen
          </button>
        </div>
      </div>
    </form>
  );
}

function useApi(url) {
  const [state, setState] = useState({ status: STATES.IDLE });

  useEffect(() => {
    if (!url) return;

    const abortController = new AbortController();
    const { signal } = abortController;

    // caching layer
    // const data = localStorage.getItem(pokeId);

    // if (data) {
    //   setState({ status: STATES.RESOLVED, pokemon: JSON.parse(data) });
    //   return;
    // }

    setState({ status: STATES.LOADING });

    console.log('🚀 loading data', url);

    fetch(url, { signal })
      .then(randomTimeout) // ⚠️ künstliche verzögerung
      .then((response) => {
        console.log('✅ response arrived', url, signal.aborted);
        if (signal.aborted) throw null;
        if (response.ok) return response.json();
        throw new Error(`${response.status} ${response.statusText}`.trim());
      })
      .then((json) => {
        // localStorage.setItem(url, JSON.stringify(json));
        if (signal.aborted) throw null;
        setState({ status: STATES.RESOLVED, data: json });
      })
      .catch((error) => {
        if (signal.aborted) return;
        setState({ status: STATES.REJECTED, error: error.message });
      });

    return () => {
      console.log('❌ clean up – call is canceled', url);
      abortController.abort();
    };
  }, [url]);

  return state;
}

function PokeData({ pokeId }) {
  const url = pokeId && `https://pokeapi.co/api/v2/pokemon/${pokeId}`;
  const { status, error, data } = useApi(url);

  // state: loading
  if (status === STATES.LOADING)
    return (
      <div className="text-center mt-5 mb-5">
        <div className="spinner-grow text-secondary" />
      </div>
    );

  // state: error
  if (status === STATES.REJECTED)
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );

  if (status === STATES.IDLE) return null;

  const name = toTitleCase(data.name).replace('-f', ' ♀').replace('-m', ' ♂');
  const image = data.sprites.other['official-artwork'].front_default || data.sprites.front_default;

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <img src={image} className="card-img-top" alt="Front default" />
        <h2 className="card-title">{name}</h2>
        <div className="card mt-2">
          <ul className="list-group list-group-flush">
            {data.abilities.map(({ ability }) => (
              <li key={ability.name} className="list-group-item">
                {ability.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
