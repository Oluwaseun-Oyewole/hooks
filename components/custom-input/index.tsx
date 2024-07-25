/* eslint-disable react/display-name */
import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from "react";

type InputType = {
  id: string;
  name: string;
  value: string;
} & InputHTMLAttributes<HTMLInputElement>;

type ImperativeType = {
  alert: () => void;
};
const CustomInput: ForwardRefRenderFunction<HTMLInputElement, InputType> = (
  { id, name, value, ...rest }: InputType,
  ref
) => {
  return (
    <>
      <label htmlFor={id}></label>
      <input
        {...rest}
        ref={ref}
        type="text"
        name={name}
        id={id}
        aria-labelledby=""
        className="border-gray-500 border-2 focus:outline-none focus:bg-gray-300 px-4"
      />
    </>
  );
};

export default forwardRef(CustomInput);
