import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const toTitleCase = (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();

export function Pokedex() {
  const [pokeId, setPokeId] = useState(null);

  return (
    <div style={{ maxWidth: 300, margin: '0 auto' }}>
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

const STATES = {
  INIT: 'INIT',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

function useApi(url) {
  const [state, setState] = useState({ status: STATES.INIT });

  useEffect(() => {
    if (!url) return;

    setState({ status: STATES.LOADING });

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios
      .get(url, { cancelToken: source.token })
      .then((response) => {
        setState({ status: STATES.SUCCESS, data: response.data });
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        setState({ status: STATES.ERROR, error: error.message });
      });

    return () => {
      source.cancel('request canceled');
    };
  }, [url]);

  return state;
}

function PokeData({ pokeId }) {
  const { status, error, data } = useApi(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);

  if (status === STATES.LOADING)
    return (
      <div className="text-center mt-5 mb-5">
        <div className="spinner-grow text-secondary" />
      </div>
    );

  if (status === STATES.ERROR)
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );

  if (status === STATES.INIT) return null;

  // womöglich: status === STATES.SUCCESS

  const name = toTitleCase(data.name).replace('-f', ' ♀').replace('-m', ' ♂');
  const image = data.sprites.other['official-artwork'].front_default || data.sprites.front_default;

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <img src={image} className="card-img-top" alt="Front default" />
        <h2 className="card-title">{name}</h2>
        <div className="card mt-2">
          <ul className="list-group list-group-flush">
            {data.abilities.map((ability) => (
              <li key={ability.ability.name} className="list-group-item">
                {toTitleCase(ability.ability.name)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
