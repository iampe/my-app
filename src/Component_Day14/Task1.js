import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    let X=10;
    let Y=20;
  return (
    <div>
        <h1>Task-1 (Day-14)</h1>
        <h2>Evaluating expression</h2>
        <h3>{X}{">"}{Y}{" : "}{{X}>{Y}?"True":"False"}</h3>
    </div>
  );
}
