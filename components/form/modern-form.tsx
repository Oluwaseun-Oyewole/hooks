"use client";
import { ChangeEvent, useOptimistic, useState } from "react";
import { deliverMessage } from "./action";

const ModernForm = () => {
  const [todoLists, setTodoLists] = useState([
    {
      id: 1,
      task: "Reading",
      sending: false,
    },
  ]);

  const [value, setValue] = useState("");
  const [optimisticTodos, addOptimisticTodos] = useOptimistic(
    todoLists,
    (currentValue, optimisticValue) => [
      ...currentValue,
      { id: 2, task: optimisticValue as string, sending: true },
    ]
  );

  async function sendMessage(formData: any) {
    const sentMessage = await deliverMessage(formData.get("task"));
    setTodoLists((prevMessage) => [
      ...prevMessage,
      {
        task: sentMessage,
        sending: false,
        id: Math.random() * 0.8,
      },
    ]);
  }

  const onSubmit = async (formData: any) => {
    addOptimisticTodos(formData.get("task"));
    await sendMessage(formData);
    setValue("");
  };

  return (
    <div>
      <div>
        {optimisticTodos?.map((todo, index) => {
          return (
            <div key={index}>
              <p>{todo.task}</p>
              {!!todo.sending && <small> (Sending...)</small>}
            </div>
          );
        })}
      </div>

      <div>
        <form action={onSubmit}>
          <input
            type="text"
            name="task"
            value={value}
            className="bg-gray-100 p-5 outline-none w-[600px]"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
          />
          <button
            type="submit"
            className="block w-full bg-blue-500 h-[60px] text-white mt-4"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModernForm;
