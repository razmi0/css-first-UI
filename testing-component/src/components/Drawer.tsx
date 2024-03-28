import { ReactNode } from "react";

const DrawerContent = (props: { children: ReactNode }) => {
  return (
    <>
      {/* DRAWER CONTAINER */}
      <div
        aria-label="drawer-container"
        className="fixed card shadow-sm overflow-hidden w-full transform translate-y-[100%] duration-[0.5s] ease-[cubic-bezier(0.32,0.72,0,1)] bg-[#243342] rounded-tl-[0.75em] rounded-tr-[0.75em] bottom-0 right-0 focus:transform-none peer-focus:transform peer-focus:translate-y-0 peer-focus:transition-transform peer-focus:duration-[0.5s] peer-focus:ease-[cubic-bezier(0.32,0.72,0,1)]"
        tabIndex={0}
      >
        {/* HANDLE */}
        <button
          aria-label="drawer-handle"
          className="bg-[#212121] h-2 w-28 m-auto mt-4 mb-1 rounded-full card shadow-md"
        />
        {/* DRAWER */}
        <div aria-label="drawer" className="h-[450px] flex items-center justify-center">
          {/* DRAWER CONTENT */}
          <div className="flex m-auto">{props.children}</div>
        </div>
      </div>
    </>
  );
};

const Drawer = (props: { children: ReactNode }) => {
  return <div id="drawer-wrapper">{props.children}</div>;
};

const DrawerTrigger = (props: { children: ReactNode }) => {
  return (
    <>
      <button aria-label="trigger-drawer" className="peer">
        {props.children}
      </button>
    </>
  );
};

export { Drawer, DrawerContent, DrawerTrigger };
