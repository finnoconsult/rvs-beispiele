import React from 'react';
// import { Counter } from './Counter';
// import { IBAN } from './IBAN';
// import { Obstliste } from './Obstliste';
// import { Kennzeichen } from './Kennzeichen';
// import { Message } from './Message';
import { TicTacToe } from './TicTacToe';

export default function App() {
  return (
    <div className="container mt-3">
      {/*
        <hr />
        <IBAN />
        <hr />
        <Obstliste />
        <hr />
        <Kennzeichen />
        <hr />
        <Counter />
        <hr />
        <Message />
      */}
      <TicTacToe />
    </div>
  );
}
