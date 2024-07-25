import {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

export type IModalImperativeProps = {
  focusOpen: () => void;
  focusClose: () => void;
};

type ModalProps = { open: boolean; close: () => void };
const ImperativeModal: ForwardRefRenderFunction<
  IModalImperativeProps,
  ModalProps
> = ({ open, close }, ref) => {
  const focusOpenRef = useRef<HTMLButtonElement | any>(null);
  const focusCloseRef = useRef<HTMLButtonElement | any>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focusOpen() {
          if (focusOpenRef.current) {
            return focusOpenRef.current.focus();
          }
        },
        focusClose() {
          if (focusCloseRef.current) {
            return focusCloseRef.current.focus();
          }
        },
      };
    },
    []
  );
  return (
    <div className="">
      {open && (
        <>
          {/* <div className="fixed top-0 left-0 bg-gray-300 h-screen w-screen" /> */}
          <div className="absolute top-0 left-0 flex items-center justify-center flex-col h-[400px] w-screen bg-gray-300">
            <button
              onClick={close}
              ref={focusCloseRef}
              className="focus:bg-red-700"
            >
              Close Modal
            </button>
            <br />
            <br />

            <p>Do you want to continue?</p>
            <div className="flex items-center gap-4">
              <button ref={focusOpenRef}>Yes</button>
              <button onClick={close} ref={focusCloseRef}>
                No
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default forwardRef<IModalImperativeProps, ModalProps>(ImperativeModal);
