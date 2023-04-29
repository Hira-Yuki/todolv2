// 할일을 생성하는 명령
const CREATE_TODO = "CREATE_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const CHANGE_ISDONE = "CHANGE_ISDONE";

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
  {
    id: 3, // id는 모두 고유값이어야 합니다.
    title: "아침 먹기",
    body: "아침은 뭐 먹지?",
    isDone: true,
  },
];

// 할일을 만드는 Action Creator
export const createTodo = (payload) => {
  return {
    type: CREATE_TODO, // type에는 위에서 만든 상수로 사용 (vscode에서 자동완성 지원)
    payload,
  };
};

// 할일을 지우는 Action Creator
export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

// 할일의 상태를 바꾸는 Action Creator
export const changeTodo = (payload) => {
  return {
    type: CHANGE_ISDONE,
    payload,
  };
};

// 리듀서
const todoReducer = (state = initialState, action) => {
  // console.log("state",state)
  // console.log("action",action)
  switch (action.type) {
    case CREATE_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case CHANGE_ISDONE:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    default:
      return state;
  }
};

export default todoReducer;
