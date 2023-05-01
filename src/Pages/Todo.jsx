import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function Todo() {
  const todoStore = useSelector((state) => state).todoReducer;
  const param = useParams();

  const todo = todoStore.find((todo) => todo.id === parseInt(param.id));

  return (
    <div>
      <p>id : {todo.id}</p>
      <p>제목 : {todo.title}</p>
      <p>내용 : {todo.body}</p>
      <Link to={"/"}> 이전 페이지로 </Link>
    </div>
  );
}

export default Todo;
