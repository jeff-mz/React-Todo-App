import React from "react";
import TodoCard from "./components/TodoCard";

function App() {
  return (
    <main
      id="main"
      className=" w-full h-full flex flex-col items-center font-display bg-[#2b2d42] min-h-screen"
    >
      <TodoCard />
      <p className="text-[16px] font-bold text-stone-100 mt-[16px] xl:text-2xl xl:my-12">
        Made by Jafar Mirzapoor with 💗
      </p>
    </main>
  );
}

export default App;
