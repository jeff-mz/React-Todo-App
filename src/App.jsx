import React from "react";
import TodoCard from "./components/TodoCard";

function App() {
  return (
    <main
      id="main"
      className=" w-full h-full py-12 flex flex-col items-center justify-center  font-display"
    >
      <TodoCard />
      <p className="text-[16px] font-bold text-[#2b2d42] mt-[16px]">
        Coded Jafar Mirzapoor with 💗
      </p>
    </main>
  );
}

export default App;
