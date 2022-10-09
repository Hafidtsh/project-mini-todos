import { combineReducers } from "redux";
import ListReducer from "./List/List";

const initialState = {
  getListTodosResult: false,
  getListTodosLoading: false,
  getListTodosError: false,

  addListTodosResult: false,
  addListTodosLoading: false,
  addListTodosError: false,
};

// const combineReducers = (reducers) => {
//   return (state, action) => {
//     return Object.keys(reducers).reduce((acc, prop) => {
//       return {
//         ...acc,
//         ...reducers[prop]({ [prop]: acc[prop] }, action),
//       };
//     }, state);
//   };
// };

export default combineReducers({
  ListReducer,
});
