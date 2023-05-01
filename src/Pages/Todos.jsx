import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Todos() {
  const todoStore = useSelector((state) => state).todoReducer;
  return (
    <div>
      {
        todoStore.map((item) => {
          return (
            <div key={item.id}>
            <Link to={`/todos/${item.id}`}>
              <span style={{ cursor: 'pointer' }}>➡️ Go to: {item.title}</span>
            </Link>
          </div>
          )
        })
      }
    </div>
  )
}

export default Todos;
