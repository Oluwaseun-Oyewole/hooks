"use client";
import { useOptimistic, useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { deliverMessage } from "./action";

const Thread = ({
  messages,
  sendMessage,
}: {
  messages: { text: any; sending: boolean }[];
  sendMessage: <T>(arg: T) => void;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [value, setValue] = useState("");
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );
  const formAction = async (formData: any) => {
    addOptimisticMessage(formData.get("message"));
    // formRef.current?.reset();
    await new Promise((res) => setTimeout(res, 1000));
    await sendMessage(formData);
    setValue("");
  };

  function search() {
    throw new Error("search error");
  }

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input
          type="text"
          name="message"
          placeholder="Hello!"
          className="bg-gray-100 p-5 outline-none w-[600px]"
          value={value}
        />
        <button
          type="submit"
          className="block w-full bg-blue-500 h-[60px] text-white mt-4"
        >
          Send
        </button>
      </form>
      <br />{" "}
      <ErrorBoundary fallback={<p>Error Message</p>}>
        {/* <form action={search}>
          <input
            name="query"
            className="bg-gray-100 p-5 outline-none w-[600px]"
          />
          <button
            type="submit"
            className="block w-full bg-blue-500 h-[60px] text-white mt-4"
          >
            Search
          </button>
        </form> */}
      </ErrorBoundary>
    </>
  );
};

const ReactForm = () => {
  const [messages, setMessages] = useState([
    { text: "Hello there!", sending: false, key: 1 },
  ]);

  async function sendMessage(formData: any) {
    console.log("send message", formData);
    const sentMessage = await deliverMessage(formData.get("message"));
    setMessages((prevMessage) => [
      ...prevMessage,
      {
        text: sentMessage,
        sending: false,
        key: Math.random() * 0.8,
      },
    ]);
  }

  return (
    <div>
      <Thread messages={messages} sendMessage={sendMessage} />
    </div>
  );
};

export default ReactForm;
