import { ReactNode, forwardRef } from "react";

interface DrawerTriggerProps {
  children: React.ReactNode;
  className: string;
}

const DrawerTrigger = forwardRef<HTMLButtonElement, DrawerTriggerProps>(({ children, className }, ref) => {
  return (
    <button ref={ref} aria-label="Open drawer" className={`peer/drawer ${className}`}>
      {children}
    </button>
  );
});

const DrawerContent = forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
  ({ className, children, ...props }, ref) => {
    const transforms = `transform translate-y-[100%] duration-[0.5s] ease-[cubic-bezier(0.32,0.72,0,1)]`;
    const peer = `focus-within:transform-none peer-focus/drawer:translate-y-0 peer-focus/drawer:transition-transform peer-focus/drawer:duration-[0.5s] peer-focus/drawer:ease-[cubic-bezier(0.32,0.72,0,1)]`;
    return (
      <div
        data-is="drawer-content"
        tabIndex={0}
        ref={ref}
        className={`fixed overflow-hidden w-full bottom-0 right-0 ${transforms} ${peer} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

/**
 * TODO : find a way to close the overlay when clicking on a button[data-is="drawer-close"]
 */
const DrawerOverlay = forwardRef<HTMLDivElement, { className?: string }>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-is="overlay"
      className={`fixed top-0 left-0 peer-focus/drawer:w-[100vw] peer-focus/drawer:h-[100vh] has-[+:focus-within]:w-[100vw] has-[+:focus-within]:h-[100vh] ${className}`}
      {...props}
    ></div>
  );
});

const DrawerHandle = forwardRef<HTMLButtonElement, { className?: string }>((props, ref) => (
  <>
    <button
      data-is="drawer-close"
      ref={ref}
      className={`absolute top-0 h-3 w-28 m-auto block mt-4 mb-1 ${props.className}`}
    />
  </>
));

const DrawerCloseTrigger = forwardRef<HTMLButtonElement, { children: ReactNode; className?: string }>((props, ref) => {
  return (
    <button ref={ref} data-is="drawer-close" {...props}>
      {props.children}
    </button>
  );
});

const Drawer = (props: { children: ReactNode }) => {
  return (
    <>
      <style>
        {`
          [data-is="drawer-content"]:has(button[data-is="drawer-close"]:focus) {
            transform: translateY(100%);
            transition: transform 0.5s cubic-bezier(0.32, 0.72, 0, 1);
          }`}
      </style>
      {props.children}
    </>
  );
};

export { Drawer, DrawerCloseTrigger, DrawerContent, DrawerHandle, DrawerOverlay, DrawerTrigger };
