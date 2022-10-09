import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListTodosAction } from "../../actions/ListTodosAction";

function ListTodos() {
  const { getListTodosResult, getListTodosLoading, getListTodosError } = useSelector((state) => state.ListReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    //panggil action getListTodos
    dispatch(ListTodosAction());
  }, [dispatch]);
  return (
    <div>
      <h4 className="text-3xl flex align-middle bg-slate-500 rounded-lg p-2 mb-4">List Todos</h4>
      {getListTodosResult ? (
        getListTodosResult.map((todos) => {
          return (
            <>
              <div>
                <table className="flex justify-center">
                  <tr className="flex gap-4 border border-solid w-[800px] mt-5 p-2 shadow justify-between">
                    <td>{todos.id}.</td>
                    <td>{todos.title}</td>
                    <td>{todos.completed}</td>
                    <td>{todos.userId}</td>
                  </tr>
                </table>
              </div>
            </>
          );
        })
      ) : getListTodosLoading ? (
        <p>Loading.....</p>
      ) : (
        <p>{getListTodosError ? getListTodosError : "Data Kosong"}</p>
      )}
    </div>
  );
}

export default ListTodos;
