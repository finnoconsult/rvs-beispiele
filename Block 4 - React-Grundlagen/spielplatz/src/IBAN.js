import { useState } from 'react';

const formatIban = (value) =>
  (
    value
      .toUpperCase()
      .replace(/\s/g, '')
      .replace(/[^0-9A-Z]/g, '')
      .match(/.{1,4}/g) || []
  ).join(' ');

export function IBAN() {
  const [iban, setIban] = useState('');

  const onChange = (event) => {
    const value = event.target.value;
    setIban(formatIban(value));
  };

  return <input value={iban} onChange={onChange} style={{ width: iban.length * 10, minWidth: 100 }} />;
}
