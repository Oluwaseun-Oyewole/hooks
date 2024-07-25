import SubmitButton from "../form/submit";

type TodoItem = {
  id: number;
  item: string;
};

const OptimisticHook = () => {
  // const [todos, setTodos] = useState([
  //   { id: 1, item: "My first task" },
  //   { id: 2, item: "My second task" },
  // ]);
  // const [value, setValue] = useState("");
  // const [optimisticTodos, addOptimisticTodos] = useOptimistic(
  //   todos,
  //   (currentValue: any, newValue) => {
  //     return [
  //       ...currentValue,
  //       { id: Math.random() * 0.8, item: newValue, sending: true },
  //     ];
  //   }
  // );

  const handleSubmi = async (formData: any) => {
    // e.preventDefault();
    // const formData = new FormData();
    formData = formData.get("todo");
    console.log("adding to cart", formData);

    // server call here
    // addOptimisticTodos(value);
    // setTimeout(() => {
    //   setTodos((prevTodos) => [
    //     ...prevTodos,
    //     { id: Math.random() * 0.8, item: value },
    //   ]);
    // }, 2000);
    // alert(`You submitted '${formData}'`);
    // setValue("");
  };

  const handleSubmit = async (formData: any) => {
    "use server";
    formData = formData.get("todo");
    console.log("adding to cart", formData);
  };

  return (
    <div>
      {/* <div>
        {optimisticTodos?.map((todo: (typeof todos)[0]) => {
          return (
            <div key={todo.id}>
              <p>{todo.item}</p>
              {!!optimisticTodos.sending && <small> (Sending...)</small>}
            </div>
          );
        })}
      </div> */}

      <div className="py-10">
        <form action={handleSubmit}>
          {/* <label htmlFor="todo"></label> */}
          <input
            // value={value}
            type="text"
            className="bg-gray-100 p-5 outline-none w-[600px]"
            name="todo"
            // id="todo"
            // onChange={(e: ChangeEvent<HTMLInputElement>) =>
            //   setValue(e.target.value)
            // }
          />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default OptimisticHook;
