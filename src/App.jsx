import React, { useState } from "react";
import "./App.css";
// Styled Components를 저장한 파일의 전체를 임포트하고 별칭으로 S를 붙여서 호출함
import * as S from "./Style";
import { useDispatch, useSelector } from "react-redux";
import InputAera from "./components/InputAera";
function App() {
  // Store 조회
  const todoStore = useSelector((state) => state);
  console.log("todoReducer -> ", todoStore);

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
  const onSubmitHandler = () => {
    const newTodo = {
      id: Math.random(),
      title: subtitle,
      body: todoBody,
      isDone: false,
    };

    dispatch({ type: "CREATE_TODO", payload: newTodo });
    clearForm();
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
          {/* <S.StCreateTodo>
            <h3>Do it!</h3>
            <ul>
              제목:
              <br />
              <textarea
                value={subtitle}
                placeholder="제목을 입력하세요"
                rows="1"
                type="text"
                style={{ width: "95%" }}
                onChange={onSubtitleHandler}
              />
            </ul>
            <ul>
              내용:
              <br />
              <textarea
                value={todoBody}
                placeholder="내용을 입력하세요"
                rows="5"
                type="text"
                style={{ width: "95%" }}
                onChange={onTodoBodyHandler}
              />
            </ul>
            <button onClick={onSubmitHandler}>Submit</button>
          </S.StCreateTodo> */}
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
              {/* 카드로 출력하는 영역 */}
              <S.StTodoCard>
                <h4>Title</h4>
                <p>Body</p>
                <button>Done</button>
                <button>Delete</button>
              </S.StTodoCard>
            </S.StTodoCards>
          </S.StTodosBox>
          {/* 완료한 작업 영역 */}
          <S.StTodosBox>
            <h3>Done!</h3>
            <S.StTodoCards>
              {/* 카드로 출력하는 영역 */}
              <S.StTodoCard>
                <h4>Title</h4>
                <p>Body</p>
                <button>Cancel</button>
                <button>Delete</button>
              </S.StTodoCard>
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
