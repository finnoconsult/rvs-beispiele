import { useLocalStorageState } from './useLocalStorageState';

export function Message({ name }) {
  const [message, setMessage] = useLocalStorageState(name);
  const onChange = (event) => setMessage(event.target.value);

  return (
    <form className="my-2">
      <label htmlFor="message">Nachricht</label>
      <textarea className="form-control" id="message" rows="3" value={message} onChange={onChange}></textarea>
      <button className="btn btn-primary mt-2" type="button">
        Absenden
      </button>
    </form>
  );
}
