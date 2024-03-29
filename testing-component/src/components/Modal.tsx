import { ReactNode, forwardRef } from "react";
// ---
//TODO :  animation on opacity and scale
// ---
interface ModalCloseProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Modal = (props: { children: ReactNode }) => {
  return (
    <>
      <style>
        {`
          [data-is="modal-content"]:has(button[data-is="close-modal"]:focus) {
            display : none;
          }`}
      </style>
      {props.children}
    </>
  );
};

const ModalOverlay = forwardRef<HTMLDivElement, { className?: string }>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-is="overlay"
      className={`fixed top-0 left-0 peer-focus/modal-trigger:w-[100vw] peer-focus/modal-trigger:h-[100vh] has-[+:focus-within]:w-[100vw] has-[+:focus-within]:h-[100vh] ${className}`}
      {...props}
    ></div>
  );
});

const ModalCross = forwardRef<SVGSVGElement, ModalCloseProps>(({ className, ...props }, ref) => {
  return (
    <ModalCloseTrigger className="absolute top-0 right-0 mt-2 mr-2">
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 text-slate-400 hover:text-slate-300 transition-colors duration-200 ease-in-out ${className}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </ModalCloseTrigger>
  );
});

const ModalTrigger = forwardRef<HTMLButtonElement, { children: ReactNode; className?: string }>(
  ({ className, children, ...props }, ref) => (
    <button ref={ref} className={`peer/modal-trigger ${className}`} {...props}>
      {children}
    </button>
  )
);

const ModalCloseTrigger = forwardRef<HTMLButtonElement, { children: ReactNode; className?: string }>((props, ref) => {
  return (
    <button ref={ref} data-is="close-modal" {...props}>
      {props.children}
    </button>
  );
});

const ModalContent = forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
  ({ className, ...props }, ref) => {
    return (
      <>
        <div
          ref={ref}
          data-is="modal-content"
          className={`fixed top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] opacity-0 -z-50 scale-0 peer-focus/modal-trigger:opacity-100 peer-focus/modal-trigger:z-50 peer-focus/modal-trigger:scale-100 focus-within:opacity-100 focus-within:z-50 focus-within:scale-100 ${className}`}
          tabIndex={0}
          {...props}
        >
          {props.children}
        </div>
      </>
    );
  }
);

export { Modal, ModalCloseTrigger, ModalContent, ModalCross, ModalOverlay, ModalTrigger };
