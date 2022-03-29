import { useLocalStorageState } from './useLocalStorageState';
import './TicTacToe.css';

/* Aufgaben:
  1. Vervollständigen Sie den Code, so dass das Spiel lauffähig ist
  2. Implementieren Sie einen Undo-Button, der den jeweils letzten Schritt rückgängig macht
  3. Persistieren Sie den Spielzustand im LocalStorage, um nicht vollendete Partien später fortsetzen zu können
*/

export function TicTacToe() {
  const [history, setHistory] = useLocalStorageState('ttt-history', [Array(9).fill(null)]);
  const pushToHistory = (stateArr) => setHistory([...history, stateArr]);
  const restart = () => setHistory(history.slice(0, 1));
  const undo = () => setHistory(history.slice(0, -1));
  const lastState = history[history.length - 1];

  return (
    <div className="game">
      <Board squares={lastState} handleUpdate={pushToHistory} />
      <button onClick={restart} className="btn btn-primary">
        restart
      </button>{' '}
      <button onClick={undo} className="btn btn-secondary" disabled={history.length <= 1}>
        undo
      </button>
      <h4 style={{ marginTop: 24 }}>History</h4>
      {[...history].reverse().map((board, index) => (
        <Board key={index} squares={board} />
      ))}
    </div>
  );
}

function Board({ squares, handleUpdate }) {
  const nextPlayer = getNextPlayer(squares);
  const winner = getWinner(squares);
  const status = getStatusMessage(winner, squares, nextPlayer);

  function updateSquare(squareIndex) {
    if (winner || squares[squareIndex]) return;
    const squaresCopy = [...squares];
    squaresCopy[squareIndex] = nextPlayer;
    handleUpdate(squaresCopy);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="squares">
        {squares.map((square, index) => (
          <button key={index} onClick={() => updateSquare(index)}>
            {square}
          </button>
        ))}
      </div>
    </>
  );
}

// -- Helper functions ---

function getNextPlayer(squares) {
  const xCount = squares.filter((r) => r === 'X').length;
  const oCount = squares.filter((r) => r === 'O').length;
  return xCount === oCount ? 'X' : 'O';
}

function getStatusMessage(winner, squares, nextPlayer) {
  if (winner) return `Gewinner: ${winner}`;
  if (squares.every(Boolean)) return 'Gleichstand';
  return `Nächster Zug: ${nextPlayer}`;
}

function getWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
