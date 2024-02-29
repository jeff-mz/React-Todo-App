import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
function TodoCard() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (el) => {
    setTodo(el.target.value);
  };

  const submitHandler = () => {
    todo.length > 0 &&
      setTodos((pervTodos) => [
        ...pervTodos,
        { task: todo, id: Math.floor(Math.random() * 1000) },
      ]);
    setTodo("");
  };

  const deleteHandler = (id) => {
    let filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="w-[90%] bg-[#2b2d42] p-2 rounded- flex flex-col items-center ">
      <h1 className="text-4xl text-white font-bold my-8 text-center md:text-6xl">
        Get Things Done!
      </h1>
      {/* input start */}
      <div className="w-4/5 mb-8 mx-auto">
        <input
          type="text"
          value={todo}
          onChange={changeHandler}
          placeholder="What is next todo?"
          style={{ borderRadius: "6px 0px 0px 6px" }}
          className="w-3/5 p-2 text-[16px] border-none outline-none lg:w-4/5 md:text-2xl md:p-4"
        />
        <button
          type="submit"
          onClick={submitHandler}
          style={{ borderRadius: "0px 6px 6px 0px" }}
          className="w-2/5 text-[16px] bg-[#ffaf3e] p-2 text-[#1e221e] font-medium lg:w-1/5 md:text-2xl md:p-4"
        >
          Add Task
        </button>
      </div>
      {/* input end  */}
      {/* Todos List  */}
      {todos.map((task) => {
        return (
          <div
            key={task.id}
            className="w-4/5 bg-[#404255] p-2 flex items-center my-4 rounded-md justify-between md:p-4"
          >
            <p
              className={`text-[18px] text-white font-medium md:text-4xl md:py-2`}
            >
              {task.task}
            </p>
            <div>
              <MdDeleteForever
                onClick={() => deleteHandler(task.id)}
                className="inline text-[#d0342c] md:text-4xl md:mx4"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoCard;
