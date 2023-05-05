import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as S from "../Style";

function Todos() {
  const todoStore = useSelector((state) => state).todoReducer;
  let count = 1;

  return (
    <div>
      <Link to={"/"}>홈으로 돌아가기</Link>
      <S.StTable>
        <colgroup>
          <col style={{ width: "300px" }} />
          <col style={{ width: "600px" }} />
        </colgroup>
        <thead>
          <tr>
            <S.StNumberColumn>번호</S.StNumberColumn>
            <S.StTitleColumn>제목</S.StTitleColumn>
          </tr>
        </thead>
        <tbody>
          {todoStore.map((item) => {
            return (
              <tr key={item.id}>
                <S.StNumberColumn>{count++}</S.StNumberColumn>
                <S.StTitleColumn>
                  <Link to={`/todos/${item.id}`}>
                    <S.StTitleLink>{item.title}</S.StTitleLink>
                  </Link>
                </S.StTitleColumn>
              </tr>
            );
          })}
        </tbody>
      </S.StTable>
    </div>
  );
}

export default Todos;