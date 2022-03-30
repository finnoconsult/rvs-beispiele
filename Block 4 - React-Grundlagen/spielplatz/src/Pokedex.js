import { useState, useEffect, useRef } from 'react';

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

const randomTimeout = (data) => new Promise((resolve) => setTimeout(resolve, Math.random() * 5000, data));

function PokeData({ pokeId }) {
  const [state, setState] = useState({ status: STATES.INIT });

  const { status, error, pokemon } = state;

  useEffect(() => {
    setState({ status: STATES.LOADING });
    let isCanceled = false;

    console.log('🚀 loading data', pokeId);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then(randomTimeout)
      .then((response) => {
        if (isCanceled) throw null;
        console.log('✅ response arrived', pokeId);
        if (response.ok) return response.json();
        throw new Error('404 Pokemon not found');
      })
      .then((json) => {
        setState({ status: STATES.SUCCESS, pokemon: json });
      })
      .catch((error) => {
        if (isCanceled) return;
        console.log('❌ error occured', pokeId);
        setState({ status: STATES.ERROR, error: error.message });
      });

    return () => {
      isCanceled = true;
      console.log('❌ effect cleaned up', pokeId);
    };
  }, [pokeId]);

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

  const name = toTitleCase(pokemon.name).replace('-f', ' ♀').replace('-m', ' ♂');
  const image = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <img src={image} className="card-img-top" alt="Front default" />
        <h2 className="card-title">{name}</h2>
        <div className="card mt-2">
          <ul className="list-group list-group-flush">
            {pokemon.abilities.map((ability) => (
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
