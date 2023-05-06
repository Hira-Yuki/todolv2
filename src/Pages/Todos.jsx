import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as S from "../Style";

function Todos() {
  const todoStore = useSelector((state) => state).todoReducer;
  let count = 1;

  return (
    <S.StOutputAera>
      <div>
        <h3>오늘 할일을 내일로 미루지 말자!</h3>
        <S.StTable>
          <colgroup>
            <col style={{ width: "200px" }} />
            <col style={{ width: "500px" }} />
          </colgroup>
          <thead>
            <tr>
              <S.StNumberColumn>번호</S.StNumberColumn>
              <S.StTitleColumn>제목</S.StTitleColumn>
            </tr>
          </thead>
          <tbody>
            {todoStore
              .filter((item) => !item.isDone)
              .map((item) => {
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
    </S.StOutputAera>
  );
}

export default Todos;
