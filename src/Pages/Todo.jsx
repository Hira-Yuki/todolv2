import React from 'react'
import { useParams } from 'react-router-dom';


function Todo() {
    const todoStore = useSelector((state) => state).todoReducer;
    const param = useParams();

    const todo = todoStore.find((todo) => todo.id === parseInt(param.id));
  
    return <div>{todo.title}</div>;
}

export default Todo