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
  width: 25%;
  height: 100px;
`;

export const StTodoCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StPCard = styled.p`
  margin: 5px;
`;

// 여기부터 상세페이지 디자인
export const StDitailContainer = styled.div`
  margin: 200px auto;
  width: 500px;
  height: 300px;
  border: 2px solid black;
  padding: 10px;
  box-shadow: 5px 5px gray;
  position: relative; /* 부모 컨테이너의 위치를 설정 */
`;

export const StH1 = styled.h1`
  font-size: 32px;
  border-left: 5px solid blueviolet;
  padding-left: 5px;
  color: brown;
  margin: 10px;
`;
export const StBody = styled.div`
  font-weight: bold;
  margin: 10px;
`;

export const StLink = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
`;

export const StId = styled.div`
  position: absolute; /* 자식 p 태그의 위치를 설정 */
  top: 0; /* 위쪽으로 위치 */
  right: 0; /* 오른쪽으로 위치 */
  margin: 10px; /* 마진을 추가하여 여백을 만듦 */
`;

export const StTable = styled.table`
  border-collapse: collapse;
  border: 2px solid black;
  width: 900px;
`;

export const StNumberColumn = styled.th`
  border: 1px solid black;
  text-align: center;
  width: 300px;
`;

export const StTitleColumn = styled.td`
  border: 1px solid black;
  text-align: center;
  width: 600px;
`;

export const StTitleLink = styled.span`
  display: block;
  text-align: center;
`;