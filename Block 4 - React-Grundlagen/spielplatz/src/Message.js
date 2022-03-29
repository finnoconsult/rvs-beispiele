import { useLocalStorageState } from './useLocalStorageState';

export function Message() {
  const [message, setMessage] = useLocalStorageState('message-backup');
  const [savePoints, setSavePoints] = useLocalStorageState('savepoints', []);

  const onChange = (event) => setMessage(event.target.value);

  const addSavePoint = () => {
    setSavePoints([message, ...savePoints]);
  };

  const restoreSavePoint = () => {
    setMessage(savePoints[0]);
  };

  return (
    <form className="container my-2">
      <label htmlFor="message">Nachricht</label>
      <textarea className="form-control" id="message" rows="3" value={message} onChange={onChange} />
      <button className="btn btn-primary mt-2" type="button">
        Absenden
      </button>

      <div className="mt-2">
        <button className="btn btn-secondary mt-2" type="button" onClick={addSavePoint}>
          Speichern
        </button>{' '}
        <button className="btn btn-secondary mt-2" type="button" onClick={restoreSavePoint}>
          Undo
        </button>{' '}
        {savePoints.length}
      </div>
    </form>
  );
}
