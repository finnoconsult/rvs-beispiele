import { useState, useEffect } from 'react';

function useLocalStorageState(key, initialValue = '') {
  const [value, setValue] = useState(() => window.localStorage.getItem(key) ?? initialValue);

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

export function Message() {
  const [message, setMessage] = useLocalStorageState('message-backup');

  const onChange = (event) => setMessage(event.target.value);

  return (
    <form className="container my-2">
      <label htmlFor="message">Nachricht</label>
      <textarea className="form-control" id="message" rows="3" value={message} onChange={onChange} />
      <button className="btn btn-primary mt-2" type="button">
        Absenden
      </button>
    </form>
  );
}
