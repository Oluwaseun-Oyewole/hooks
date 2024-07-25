import { useId } from "react";

const FormInputWithId = () => {
  const id = useId();
  return (
    <div>
      <div>
        <label htmlFor={id + "-username"}></label>
        <input
          type="text"
          name="username"
          id={id + "-username"}
          aria-labelledby={id + "-username"}
        />
        <p id={id + "-username"}>Error Message for username</p>
      </div>

      <label htmlFor={id + "-password"}></label>
      <input
        type="text"
        name="password"
        id={id + "-password"}
        aria-labelledby={id + "-password"}
      />
      <p id={id + "-password"}>Error Message for username</p>
    </div>
  );
};

export default FormInputWithId;
