import { Link } from "react-router-dom";
import * as S from "../Style";

function OutputAera({todoStore, isDoneHandler,removeTodoButton
}) {
  return (
    <S.StOutputAera>
      {/* 진행 중인 작업 영역 */}
      <S.StTodosBox>
        <h3>Working...</h3>
        <S.StTodoCards>
          {todoStore
            ?.filter((item) => !item.isDone)
            .map((item) => {
              return (
                <S.StTodoCard key={item.id}>
                  <h4>{item.title} <Link to={`/todos/${item.id}`}>상세보기</Link></h4>
                  <S.StPCard>{item.body}</S.StPCard>
                  <footer>id: {item.id}</footer>
                  <button onClick={() => isDoneHandler(item.id)}>Done</button>
                  <button onClick={() => removeTodoButton(item.id)}>
                    Remove
                  </button>
                </S.StTodoCard>
              );
            })}
        </S.StTodoCards>
      </S.StTodosBox>
      {/* 완료한 작업 영역 */}
      <S.StTodosBox>
        <h3>Done!</h3>
        <S.StTodoCards>
          {todoStore
            ?.filter((item) => item.isDone)
            .map((item) => {
              return (
                <S.StTodoCard key={item.id}>
                  <h4>{item.title} <Link to={`/todos/${item.id}`}>상세보기</Link></h4>
                  <S.StPCard>{item.body}</S.StPCard>
                  <footer>id: {item.id}</footer>
                  <button onClick={() => isDoneHandler(item.id)}>Cancel</button>
                  <button onClick={() => removeTodoButton(item.id)}>
                    Remove
                  </button>
                </S.StTodoCard>
              );
            })}
        </S.StTodoCards>
      </S.StTodosBox>
    </S.StOutputAera>
  );
}

export default OutputAera;
