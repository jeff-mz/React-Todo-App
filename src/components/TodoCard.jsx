import React, { useState } from "react";
import { MdOutlineEdit, MdDeleteForever, MdOutlineDone } from "react-icons/md";

function TodoCard() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleTaskSubmission = () => {
    if (taskInput.length > 0) {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          description: taskInput,
          id: Math.floor(Math.random() * 1000),
          done: false,
        },
      ]);
      setTaskInput("");
    }
  };

  const handleTaskDeletion = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const handleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="w-full rounded- flex flex-col items-center">
      <h1 className="text-4xl text-white font-bold my-8 text-center md:text-6xl 2xl:text-8xl 2xl:my-16">
        Get Things Done!
      </h1>
      {/* input start */}
      <div className="w-4/5 mb-8 mx-auto">
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Create a new task..."
          style={{ borderRadius: "6px 0px 0px 6px" }}
          className="w-3/5 px-4 py-4 xl:py-8 text-[16px] border-none outline-none  md:text-2xl md:p-4 xl:text-4xl 2xl:text-6xl 2xl:py-7"
        />
        <button
          type="submit"
          onClick={handleTaskSubmission}
          style={{ borderRadius: "0px 6px 6px 0px" }}
          className="w-2/5 px-2 py-4 xl:py-8 text-[16px] bg-[#ffaf3e]  text-[#1e221e] font-medium md:text-xl md:p-4 xl:text-3xl 2xl:text-4xl"
        >
          Add Task
        </button>
      </div>
      {/* input end  */}

      {/* Tasks List  */}
      <ul className="w-4/5 bg-[#3f405f] min-h-52 list-disc rounded-sm pb-4 md:pb-10">
        <p className="text-center text-slate-300 font-bold py-4 text-[18px] md:text-3xl xl:text-5xl 2xl:text-7xl md:py-6 xl:py-8 2xl:py-12">
          Your task list
        </p>
        {tasks.map((task) => (
          <li className="w-[90%] list-decimal flex items-center py-4 px-4 m-auto rounded-lg justify-between bg-[#57598d]">
            <p
              className={`text-[18px] ${
                task.done ? "line-through" : ""
              } text-white font-medium md:py-2 md:text-2xl md:p-4 xl:text-4xl 2xl:text-6xl`}
            >
              {task.description}
            </p>
            <div>
              <MdDeleteForever
                onClick={() => handleTaskDeletion(task.id)}
                className="inline text-[#d0342c] mx-2 text-[18px] md:mx-4 xl:mx-10 md:text-3xl xl:text-5xl 2xl:text-6xl"
              />
              <MdOutlineDone
                onClick={() => handleTaskCompletion(task.id)}
                className="inline text-[#2cd04d] text-[18px] md:text-3xl xl:text-5xl 2xl:text-6xl"
              />
            </div>
          </li>
        ))}
      </ul>
      {/* End of Task list  */}
    </div>
  );
}

export default TodoCard;
