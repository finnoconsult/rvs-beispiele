import React from 'react';

export default function App() {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => setCounter(counter + 1);

  return (
    <div className="container mt-3">
      <h1>
        Mit deinem klicken hast du bereits <mark>{(counter * 3.14).toFixed(2)}</mark> kalorien verbrannt.
      </h1>
      <h1 style={{ color: counter % 2 ? 'red' : 'green' }}>{counter}</h1>
      <button className="btn btn-primary" onClick={onClick}>
        increase
      </button>
    </div>
  );
}
