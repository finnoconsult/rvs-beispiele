import React from 'react';
import { Counter } from './Counter';
import { IBAN } from './IBAN';
import { Obstliste } from './Obstliste';

export default function App() {
  return (
    <div className="container mt-3">
      <Counter />
      <hr />
      <IBAN />
      <hr />
      <Obstliste />
    </div>
  );
}
