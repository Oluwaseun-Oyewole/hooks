"use client";
import { useState } from "react";

const TodoList = () => {
  const [todoLists, setTodoLists] = useState([
    {
      id: 1,
      task: "Reading",
    },
  ]);
  return (
    <>
      {todoLists?.map((todo, index) => {
        return (
          <div key={index}>
            <p>{todo.task}</p>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
