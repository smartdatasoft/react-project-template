import axios from 'axios';
import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAIL } from '../constants/todosConstant';

export const getAllTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });

  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
    //console.log(res.data);
  } catch (error) {
    dispatch({ type: GET_TODOS_FAIL, payload: error.message });
  }
};
