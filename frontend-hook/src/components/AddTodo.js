import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const addTodoHandler = (e) => {
        e.preventDefault();
        addTodo({
            title,
            desc,
            complete: false,
        })
    }
  return (
    <form>
      <div className="form-group m-2">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo Title"
          onChange={ e => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group m-2">
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo Descriptions"
          onChange={ e => setDesc(e.target.value)}
        />
      </div>
      <button className='btn btn-primary m-2' type='submit' onClick={addTodoHandler}>Add Todo</button>
    </form>
  );

};
export default AddTodo;
