import styled from "styled-components";

// 콘텐츠 전체를 감쌀 컨테이너 스타일
// 너비 최대 1200px, 최소 800px
export const StContainer = styled.div`
  margin: 5px auto;
  max-width: 1200px;
  min-width: 800px;
  background-color: #f8e1f6;
`;

export const StHeader = styled.header`
  border: 2px solid tomato;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
`;
export const StMain = styled.main`
  /* border: 2px solid tomato;
  border-radius: 10px; */
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: initial;
  height: 100vh;
`;

export const StTodosBox = styled.div`
  border: 2px solid tomato;
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px;
`;

export const StFooter = styled.footer`
  border: 2px solid tomato;
  border-radius: 10px;
  margin: 5px;
`;

export const StSidebar = styled.div`
  margin-top: 5px;
  /* border: 2px solid tomato;
  border-radius: 10px;  */
  flex-basis: 25%;
`;

export const StOutputAera = styled.div`
  margin: 5px;
  flex: 1;
  display: grid;
`;

export const StCreateTodo = styled.div`
  border: 2px solid tomato;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
  height: 250px;
`;
export const StTodoCard = styled.div`
  border: 2px solid lightblue;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  width: 20%;
`;

export const StTodoCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
