"use client";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending, data, method } = useFormStatus();

  console.log("pending -- ", pending);
  console.log("data -- ", data?.get("todo"));
  console.log("method -- ", method);

  return (
    <button
      type="submit"
      className="block w-full bg-blue-500 h-[60px] text-white mt-4"
      // formAction="/tdag"
    >
      {pending ? "Submitting" : "Submit"}
    </button>
  );
};

export default SubmitButton;
