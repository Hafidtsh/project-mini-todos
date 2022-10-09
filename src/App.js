// import { useState } from "react";
import "./App.css";
import { AddTodos, ListTodos } from "./component";
// import { ListTodos } from "./component/ListTodos";

function App() {
  return (
    <>
      <h1 className="mt-10 text-4xl">Aplikasi Todos</h1>
      <hr />
      <AddTodos />
      <hr />
      <div className="w-[600px] my-0 mx-auto border border-none rounded-lg p-6 bg-slate-100">
        <ListTodos />
      </div>
    </>
  );
}

export default App;
