import { ChangeEvent, useId, useRef, useState } from "react";
import CustomInput from "../custom-input";
import ImperativeModal, { IModalImperativeProps } from "./modal";

const ImperativeHook = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();
  const [open, setOpen] = useState(false);

  const modalRef = useRef<IModalImperativeProps | any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <ImperativeModal
        open={open}
        close={() => setOpen(false)}
        ref={modalRef}
      />
      <CustomInput
        value={value}
        ref={inputRef}
        type="text"
        name="username"
        id={id}
        aria-labelledby=""
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        className="border-gray-500 border-2 focus:outline-none px-4"
      />
      <br />
      <p ref={scrollRef} className="py-20">
        Test to be scrolled to lorem8000
      </p>

      <button onClick={() => scrollRef.current?.scrollIntoView()}>
        scroll to view ref
      </button>

      <button onClick={() => inputRef.current?.focus()}>Focus on Input</button>
      <br />
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <br />
      <div className="flex items-center justify-center gap-6">
        <button onClick={() => modalRef.current?.focusClose()}>
          Focus Close
        </button>
      </div>
    </div>
  );
};

export default ImperativeHook;
