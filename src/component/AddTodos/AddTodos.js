import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodosAction } from "../../actions/ListTodosAction";

function AddTodos() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("1. Masuk HandleSubmit");

    dispatch(addTodosAction({ id: id, title: title }));
  };

  return (
    <div className="flex justify-center flex-col">
      <h1>Add Todos</h1>
      <form onSubmit={(event) => handleSubmit(event)} className="flex justify-center mb-4">
        <input type="text" name="id" placeholder="No ?" value={id} onChange={(event) => setId(event.target.value)} />

        <input type="text" name="title" placeholder="Title ?" value={title} onChange={(event) => setTitle(event.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddTodos;
