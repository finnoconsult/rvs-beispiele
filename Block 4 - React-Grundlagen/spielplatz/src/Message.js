import { useLocalStorageState } from './useLocalStorageState';
import { useWidth } from './useWidth';

export function Message({ name }) {
  const [message, setMessage] = useLocalStorageState(name);
  const onChange = (event) => setMessage(event.target.value);
  const width = useWidth();

  if (width < 300) {
    return <div className="alert alert-danger">Diese Anwendung funktioniert nur auf Desktop</div>;
  }

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
