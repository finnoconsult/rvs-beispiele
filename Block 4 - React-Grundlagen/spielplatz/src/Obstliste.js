import { useState } from 'react';

const obst = [
  { id: 'apfel', value: '🍎 apfel' },
  { id: 'birne', value: '🍐 birne' },
  { id: 'traube', value: '🍇 traube' },
  { id: 'orange', value: '🍊 orange' },
];

export function Obstliste() {
  const [items, setItems] = useState(obst);

  function addItem() {
    setItems([...items, obst.find((i) => !items.includes(i))]);
  }

  function removeItem(item) {
    setItems(items.filter((i) => i !== item));
  }

  return (
    <div className="keys">
      <button disabled={items.length >= obst.length} onClick={addItem}>
        mehr obst
      </button>
      <ul>
        {items.map((item) => (
          <li>
            {/* li muss einen key tragen */}
            <button onClick={() => removeItem(item)}>löschen</button>
            <label>
              {item.value}
              <input defaultValue={item.value} />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
