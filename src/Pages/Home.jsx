import React, { useState } from "react";
import "../App.css";
import InputAera from "../components/InputAera";
import OutputAera from "../components/OutputAera";
// Styled Components를 저장한 파일의 전체를 임포트하고 별칭으로 S를 붙여서 호출함
import * as S from "../Style";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, removeTodo, changeTodo } from "../redux/modules/todo";
import Todos from "./Todos";

function Home() {
  // Store 조회
  const todoStore = useSelector((state) => state).todoReducer;
  // Store에 데이터를 보내주기 위한 메서드
  const dispatch = useDispatch();

  // 할일을 생성하기 위해 입력한 데이터를 받아오기
  const [subtitle, setSubtitle] = useState("");
  const [todoBody, setTodoBody] = useState("");

  // 출력 방식을 변경하기 위한 State
  const [view, setView] = useState(false);

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
    if (subtitle === "" || todoBody === "") {
      return alert("필수 항목이 채워지지 않았습니다.");
    }
    const newTodo = {
      id: Date.now(),
      title: subtitle,
      body: todoBody,
      isDone: false,
    };

    dispatch(createTodo(newTodo));
    clearForm();
  };

  // 할일을 제거하는 함수
  const removeTodoButton = (id) => {
    const removeTodoId = id;

    dispatch(removeTodo(removeTodoId));
  };

  // 할일의 상태를 변경하는 함수
  const isDoneHandler = (id) => {
    const changeTodoId = id;

    dispatch(changeTodo(changeTodoId));
  };

  // 아웃풋 리스트로 변경하는 함수
  const isListHandler = () => {
    setView(!view);
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
          <S.StSidebarModule>
            <button onClick={isListHandler}>보기 방법 변경</button>
          </S.StSidebarModule>
        </S.StSidebar>
        {/* 출력 영역 */}
        {view ? (
          <Todos />
        ) : (
          <OutputAera
            todoStore={todoStore}
            isDoneHandler={isDoneHandler}
            removeTodoButton={removeTodoButton}
          />
        )}
      </S.StMain>
      {/* 푸터 영역 */}
      <S.StFooter>Designed by Hira</S.StFooter>
    </S.StContainer>
  );
}

export default Home;
