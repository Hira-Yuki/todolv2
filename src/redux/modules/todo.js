// 초기 상태값 없어도 되지만 편의를 위해 생성.
const initialState = [
  {
    id: 1, // id는 모두 고유값이어야 합니다.
    title: "리액트 강의보기",
    body: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
  },
  {
    id: 2, // id는 모두 고유값이어야 합니다.
    title: "점심 먹기",
    body: "점심 뭐먹지..?",
    isDone: false,
  },
];

// 리듀서
const todoReducer = (state = initialState, action) => {
  console.log("state",state)
  console.log("action",action)
  switch (action.type) {

    case "CREATE_TODO":
      return {initialState : [...initialState, action.payload]}
    default:
      return state;
  }
};

export default todoReducer;