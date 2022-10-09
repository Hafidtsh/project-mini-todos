import { GET_LIST_TODOS, ADD_LIST_TODOS } from "../../actions/ListTodosAction";

const initialState = {
  getListTodosResult: false,
  getListTodosLoading: false,
  getListTodosError: false,

  addListTodosResult: false,
  addListTodosLoading: false,
  addListTodosError: false,
};

const List = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_TODOS:
      return {
        ...state,
        getListTodosResult: action.payload.data,
        getListTodosLoading: action.payload.loading,
        getListTodosError: action.payload.errorMesagge,
      };
    case ADD_LIST_TODOS:
      console.log("4. Masuk reduser", action);
      return {
        ...state,
        addListTodosResult: action.payload.data,
        addListTodosLoading: action.payload.loading,
        addListTodosError: action.payload.errorMesagge,
      };
    default:
      return state;
  }
};

export default List;
