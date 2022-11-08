import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAIL } from '../constants/todosConstant';

const initialState = {
  isLoading: false,
  todos: [],
  error: null
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload
      };
    case GET_TODOS_FAIL:
      return {
        isLoading: false,
        todos: [],
        error: action.payload
      };
    default:
      return state;
  }
};
export default todosReducer;
