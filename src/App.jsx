import React from "react";
import "./App.css";
import styled from "styled-components";

// 콘텐츠 전체를 감쌀 컨테이너 스타일
// 너비 최대 1200px, 최소 800px
const StContainer = styled.div`
  margin: 5px auto;
  max-width: 1200px;
  min-width: 800px;
  background-color: #f8e1f6;
`;

const StHeader = styled.header`
  border: 2px solid tomato;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
`;
const StMain = styled.main`
  /* border: 2px solid tomato;
  border-radius: 10px; */
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: initial;
  height: 100vh;
`;

const StTodosBox = styled.div`
  border: 2px solid tomato;
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px;
`;

const StFooter = styled.footer`
  border: 2px solid tomato;
  border-radius: 10px;
  margin: 5px;
`;

const StSidebar = styled.div`
  margin-top: 5px;
  /* border: 2px solid tomato;
  border-radius: 10px;  */
  flex-basis: 25%;
`;

const StOutputAera = styled.div`
  margin: 5px;
  flex: 1;
  display: grid;
`;

const StCreateTodo = styled.div`
  border: 2px solid tomato;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
  height: 250px;
`;
const StTodoCard = styled.div`
  border: 2px solid lightblue;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  width: 20%;
`;

const StTodoCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  return (
    <StContainer>
      {/* 헤딩 영역 */}
      <StHeader>
        <h1>Enhanced To-do list</h1>
        <p>List and manage your 'To-dos'!</p>
      </StHeader>
      <StMain>
        {/* 사이드 바 영역 */}
        <StSidebar>
          <StCreateTodo>
            <h3>Do it!</h3>
            <ul>
              제목:
              <br />
              <input type="text" style={{ width: "95%" }} />
            </ul>
            <ul>
              내용:
              <br />
              <textarea rows="5" type="text" style={{ width: "95%" }} />
            </ul>
            <button>Submit</button>
          </StCreateTodo>
          <p> &nbsp;✓ 사이드 바에 콘텐츠 추가?</p>
        </StSidebar>
        {/* 출력 영역 */}
        <StOutputAera>
          {/* 진행 중인 작업 영역 */}
          <StTodosBox>
            <h3>Working...</h3>
            <StTodoCards>
              {/* 카드로 출력하는 영역 */}
              <StTodoCard>
                <h4>Title</h4>
                <p>Body</p>
                <button>Done</button>
                <button>Delete</button>
              </StTodoCard>
            </StTodoCards>
          </StTodosBox>
          {/* 완료한 작업 영역 */}
          <StTodosBox>
            <h3>Done!</h3>
            <StTodoCards>
              {/* 카드로 출력하는 영역 */}
              <StTodoCard>
                <h4>Title</h4>
                <p>Body</p>
                <button>Cancel</button>
                <button>Delete</button>
              </StTodoCard>
            </StTodoCards>
          </StTodosBox>
        </StOutputAera>
      </StMain>
      {/* 푸터 영역 */}
      <StFooter>Designed by Hira</StFooter>
    </StContainer>
  );
}

export default App;
