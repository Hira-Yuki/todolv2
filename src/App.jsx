import React, { useState } from "react";
import "./App.css";
// Styled Components를 저장한 파일의 전체를 임포트하고 별칭으로 S를 붙여서 호출함
import * as S from "./Style";
import { useDispatch, useSelector } from "react-redux";
import InputAera from "./components/InputAera";
import { createTodo, removeTodo, changeTodo } from "./redux/modules/todo";

function App() {
  // Store 조회
  const todoStore = useSelector((state) => state).todoReducer;
  
  // Store에 데이터를 보내주기 위한 메서드
  const dispatch = useDispatch();

  // 할일을 생성하기 위해 입력한 데이터를 받아오기
  const [subtitle, setSubtitle] = useState("");
  const [todoBody, setTodoBody] = useState("");

  // 변경된 값을 저장하는 함수
  const onSubtitleHandler = (event) => {
    const inputSubtitle = event.target.value;
    setSubtitle(inputSubtitle);
  };
  const onTodoBodyHandler = (event) => {
    const inputTodoBody = event.target.value;
    setTodoBody(inputTodoBody);
  };

  // 입력 폼을 지우는 함수
  const clearForm = () => {
    setSubtitle("");
    setTodoBody("");
  };

  // submit 버튼 클릭시 동작하는 함수
  // 입력된 데이터로 객체를 생성한 뒤 Store로 전송
  const onSubmitHandler = () => {
    const newTodo = {
      id: Math.random(),
      title: subtitle,
      body: todoBody,
      isDone: false,
    };

    dispatch(createTodo(newTodo));
    clearForm();
  };

  // 할일을 제거하는 함수
  const removeTodoButton = function (id) {
    const removeTodoId = id;

    dispatch(removeTodo(removeTodoId));
  };

  // 할일의 상태를 변경하는 함수
  const isDoneHandler = function (id) {
    const changeTodoId = id;

    dispatch(changeTodo(changeTodoId));
  };

  return (
    <S.StContainer>
      {/* 헤딩 영역 */}
      <S.StHeader>
        <h1>Enhanced To-do list</h1>
        <p>List and manage your 'To-dos'!</p>
      </S.StHeader>
      <S.StMain>
        {/* 사이드 바 영역 */}
        <S.StSidebar>
          <InputAera
            subtitle={subtitle}
            onSubtitleHandler={onSubtitleHandler}
            todoBody={todoBody}
            onTodoBodyHandler={onTodoBodyHandler}
            onSubmitHandler={onSubmitHandler}
          />
          <p> &nbsp;✓ 사이드 바에 콘텐츠 추가?</p>
        </S.StSidebar>
        {/* 출력 영역 */}
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
                      <h4>{item.title}</h4>
                      <S.StPCard>{item.body}</S.StPCard>
                      <footer>id: {item.id}</footer>
                      <button onClick={() => isDoneHandler(item.id)}>
                        Done
                      </button>
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
                      <h4>{item.title}</h4>
                      <S.StPCard>{item.body}</S.StPCard>
                      <footer>id: {item.id}</footer>
                      <button onClick={() => isDoneHandler(item.id)}>
                        Cancel
                      </button>
                      <button onClick={() => removeTodoButton(item.id)}>
                        Remove
                      </button>
                    </S.StTodoCard>
                  );
                })}
            </S.StTodoCards>
          </S.StTodosBox>
        </S.StOutputAera>
      </S.StMain>
      {/* 푸터 영역 */}
      <S.StFooter>Designed by Hira</S.StFooter>
    </S.StContainer>
  );
}

export default App;
