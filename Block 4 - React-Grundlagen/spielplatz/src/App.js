import { useState, useEffect } from 'react';

export function App() {
  const [message, setMessage] = useState(() => localStorage.getItem('backup') ?? '');
  const onChange = (event) => setMessage(event.target.value);

  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  useEffect(() => {
    localStorage.setItem('backup', message);
  }, [message]);

  return (
    <form className="container my-2">
      <label htmlFor="message">Nachricht</label>
      <textarea className="form-control" id="message" rows="3" value={message} onChange={onChange}></textarea>
      <button className="btn btn-primary mt-2" type="button">
        Absenden
      </button>
      <button type="button" className="btn btn-default mt-2" onClick={increment}>
        {count}
      </button>
    </form>
  );
}
