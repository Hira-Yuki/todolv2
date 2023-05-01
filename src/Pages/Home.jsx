import React, { useState } from "react";
// import Router from "../shared/router";
import "../App.css";
import InputAera from "../components/InputAera";
import OutputAera from "../components/OutputAera";
import SideBarAera from "../components/SideBarAera";
// Styled Components를 저장한 파일의 전체를 임포트하고 별칭으로 S를 붙여서 호출함
import * as S from "../Style";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, removeTodo, changeTodo } from "../redux/modules/todo";

function Home() {
  // Store 조회
  const todoStore = useSelector((state) => state).todoReducer;

  console.log(todoStore)
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
        <OutputAera
          todoStore={todoStore}
          isDoneHandler={isDoneHandler}
          removeTodoButton={removeTodoButton}
        />
      </S.StMain>
      {/* 푸터 영역 */}
      <S.StFooter>Designed by Hira</S.StFooter>
    </S.StContainer>
  );
}

export default Home;
