import { useEffect } from 'react';
import { useLocalStorageState } from './useLocalStorageState';

export function Counter({ initialValue = 0 }) {
  const [count, setCount] = useLocalStorageState('counter', 12);
  const [history, setHistory] = useLocalStorageState('counterHistory', []);

  useEffect(() => {
    setHistory([count, ...history]);
  }, [count]);

  const increment = () => setCount((Math.random() * 100).toFixed());
  const undo = () => {
    const [ignore, lastValue, ...rest] = history;
    setCount(lastValue);
    setHistory(rest);
  };

  return (
    <div className="card card-body">
      <h5>Counter</h5>
      <div className="mb-2">
        <button type="button" className="btn btn-primary mt-2" onClick={increment}>
          New
        </button>

        <button type="button" className="btn btn-default mt-2" disabled>
          <code style={{ fontSize: '120%' }}> {count} </code>
        </button>

        <button type="button" className="btn btn-secondary mt-2" onClick={undo}>
          Undo
        </button>
      </div>
      <code>{history.join(', ')}</code>
    </div>
  );
}
