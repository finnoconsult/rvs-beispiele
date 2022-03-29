import { useState, useEffect } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  const buttonStyle = { color: counter % 2 ? 'red' : 'green' };

  useEffect(() => {
    document.title = `Klicks: ${counter}`;
  }, [counter]);

  return (
    <>
      <h1>
        Mit deinem Klicken hast du bereits <mark>{(counter * 3.14).toFixed(2)}</mark> kalorien verbrannt.
      </h1>
      <h1 style={buttonStyle}>{counter}</h1>
      <button className="btn btn-primary" onClick={increase}>
        increase
      </button>{' '}
      <button className="btn btn-primary" onClick={decrease}>
        decrease
      </button>
    </>
  );
}
