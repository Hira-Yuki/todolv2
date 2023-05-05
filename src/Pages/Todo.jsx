import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import * as S from "../Style";

function Todo() {
  const todoStore = useSelector((state) => state).todoReducer;
  const param = useParams();

  const todo = todoStore.find((todo) => todo.id === parseInt(param.id));
  return (
    <S.StDitailContainer>
      <div>{todo.isDone ? "완료함":"진행중"}</div>
      <S.StId>id : {todo.id}</S.StId>
      <S.StH1>{todo.title}</S.StH1>
      <hr />
      <S.StBody>
        {todo.body}
        
      </S.StBody>
      <S.StLink>
        <Link to={"/"}> 이전 페이지로 </Link>
      </S.StLink>
    </S.StDitailContainer>
  );
}

export default Todo;
