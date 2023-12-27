import React from 'react';

export default function TodoItem({ todo, onRemove }) {
  return (
    <li>
      투두 추가
      {todo} <button onClick={onRemove}>Remove</button>
    </li>
  );
}
