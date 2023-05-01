import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Todos() {
  const todoStore = useSelector((state) => state).todoReducer;
  let count = 1

  return (
    <div>
      <table>
        <th>번호</th>
        <th>제목</th>
        {todoStore.map((item) => {
          return (
            <tr>
              <td key={item.id}>{count++}</td>
              <td>
                <Link to={`/todos/${item.id}`}>
                  <span>{item.title}</span>
                </Link>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Todos;
