import React from "react";
import TodoCard from "./components/TodoCard";

function App() {
  return (
    <main
      id="main"
      className=" w-full h-full py-12 flex flex-col items-center justify-center  font-display bg-[#2b2d42] min-h-screen"
    >
      <TodoCard />
      <p className="text-[16px] font-bold text-stone-100 mt-[16px]">
        Made by Jafar Mirzapoor with 💗
      </p>
    </main>
  );
}

export default App;
