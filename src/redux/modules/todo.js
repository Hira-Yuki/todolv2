// 명령어 집합
const CREATE_TODO = "todo/CREATE_TODO";
const REMOVE_TODO = "todo/REMOVE_TODO";
const CHANGE_ISDONE = "todo/CHANGE_ISDONE";

const initialState = [];

// 할일을 만드는 Action Creator
export const createTodo = (payload) => {
  return {
    type: CREATE_TODO,
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
