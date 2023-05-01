import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function Todos() {
  const todoStore = useSelector((state) => state).todoReducer;
  return (
    <div>
      {
        todoStore.map((todo) => {
          return (
            <div key={todo.id}>
            <div>할일: {todo.id}</div>
            <Link to={`/todos/${todo.id}`}>
              <span style={{ cursor: 'pointer' }}>➡️ Go to: {todo.title}</span>
            </Link>
          </div>
          )
        })
      }
    </div>
  )
}

export default Todos;
