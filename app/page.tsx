/* eslint-disable react/display-name */
"use client";

import ImperativeHook from "@/components/imperative";
import { memo, useCallback, useId, useState } from "react";

const ChildComponent = memo(
  ({ handleCounter }: { handleCounter: () => void }) => {
    console.log("child component rendering");
    return (
      <div>
        <button onClick={handleCounter}>Increment Counter</button>
      </div>
    );
  }
);

function HomePage() {
  const id = useId();
  console.log("use id  testing -- ", id);
  const [count, setCount] = useState(0);
  const longLists = new Array(100).fill({
    id: Math.random() * 0.5 + 1,
    profession: "Frontend engineer",
  });
  const handleCounter = useCallback(() => {
    setCount((prevCount) => prevCount + 2);
  }, []);

  // const filterItems = useMemo((id: number) => {
  //   return longLists?.filter((list, index) => {
  //     list.id !== id;
  //   });
  // }, []);

  return (
    <main className="h-screen items-center justify-center flex flex-col text-center">
      <p>{count}</p>
      <ChildComponent handleCounter={handleCounter} />
      <ImperativeHook />
    </main>
  );
}

export default HomePage;
