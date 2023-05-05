import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Todos() {
  const todoStore = useSelector((state) => state).todoReducer;
  let count = 1;

  return (
    <div>
      <Link to={"/"}>홈으로 돌아가기</Link>
      <StTable>
        <colgroup>
          <col style={{ width: "300px" }} />
          <col style={{ width: "600px" }} />
        </colgroup>
        <thead>
          <tr>
            <StNumberColumn>번호</StNumberColumn>
            <StTitleColumn>제목</StTitleColumn>
          </tr>
        </thead>
        <tbody>
          {todoStore.map((item) => {
            return (
              <tr key={item.id}>
                <StNumberColumn>{count++}</StNumberColumn>
                <StTitleColumn>
                  <Link to={`/todos/${item.id}`}>
                    <StTitleLink>{item.title}</StTitleLink>
                  </Link>
                </StTitleColumn>
              </tr>
            );
          })}
        </tbody>
      </StTable>
    </div>
  );
}

export default Todos;

const StTable = styled.table`
  border-collapse: collapse;
  border: 2px solid black;
  width: 900px;
`;

const StNumberColumn = styled.th`
  border: 1px solid black;
  text-align: center;
  width: 300px;
`;

const StTitleColumn = styled.td`
  border: 1px solid black;
  text-align: center;
  width: 600px;
`;

const StTitleLink = styled.span`
  display: block;
  text-align: center;
`;
