import axios from "axios";
// import { useDispatch } from "react-redux";

export const GET_LIST_TODOS = "GET_LIST_TODOS";
export const ADD_LIST_TODOS = "ADD_LIST_TODOS";

export const ListTodosAction = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_LIST_TODOS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // get API
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/todos",
      timeout: 120000,
    })
      .then((response) => {
        // berhasil get api
        dispatch({
          type: GET_LIST_TODOS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal get api
        dispatch({
          type: GET_LIST_TODOS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.mesagge,
          },
        });
      });
  };
};

export const addTodosAction = (data) => {
  console.log("Masuk Action");
  return (dispatch) => {
    // loading
    dispatch({
      type: ADD_LIST_TODOS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // get API
    axios({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/todos",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        console.log("Berhasil dapet data", response.data);
        // berhasil get api
        dispatch({
          type: ADD_LIST_TODOS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("gagal dapet data", error.mesagge);
        // gagal get api
        dispatch({
          type: ADD_LIST_TODOS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.mesagge,
          },
        });
      });
  };
};
