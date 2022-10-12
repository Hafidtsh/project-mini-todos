// import { useState } from "react";
import "./App.css";
import { AddTodos, ListTodos } from "./component";
import Navbar from "./component/Navbar/Navbar";
// import { ListTodos } from "./component/ListTodos";

function App() {
  return (
    <>
      <Navbar />
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
