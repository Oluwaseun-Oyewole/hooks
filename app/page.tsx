/* eslint-disable react/display-name */

import ModernForm from "@/components/form/modern-form";
import { memo } from "react";

const ChildComponent = memo(
  ({ handleCounter }: { handleCounter: () => void }) => {
    return (
      <div>
        <button onClick={handleCounter}>Increment Counter</button>
      </div>
    );
  }
);

function HomePage() {
  // const id = useId();
  // const [count, setCount] = useState(0);
  // const longLists = new Array(100).fill({
  //   id: Math.random() * 0.5 + 1,
  //   profession: "Frontend engineer",
  // });
  // const handleCounter = useCallback(() => {
  //   setCount((prevCount) => prevCount + 2);
  // }, []);

  // const filterItems = useMemo((id: number) => {
  //   return longLists?.filter((list, index) => {
  //     list.id !== id;
  //   });
  // }, []);

  return (
    <main className="h-screen items-center justify-center flex flex-col text-center">
      {/* <LayoutEffectHook /> */}
      {/* <OptimisticHook /> */}
      {/* <ReactForm /> */}
      <ModernForm />
    </main>
  );
}

export default HomePage;
