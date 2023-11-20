import React from 'react';

export default function TodoItem({ todo, onRemove }) {
  return (
    <li>
      {todo} <button onClick={onRemove}>Remove</button>
    </li>
  );
}
