import { Message } from './Message';
import { Counter } from './Counter';

export function App() {
  return (
    <div className="container my-2">
      <Message name="msg1" />
      <Message name="msg2" />
      <Counter initialValue={123} />
    </div>
  );
}
