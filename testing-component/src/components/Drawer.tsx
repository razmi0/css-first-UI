import { ReactNode, forwardRef } from "react";

interface DrawerTriggerProps {
  children: React.ReactNode;
  className: string;
}

const DrawerTrigger = forwardRef<HTMLButtonElement, DrawerTriggerProps>(({ children, className }, ref) => {
  return (
    <button ref={ref} aria-label="Open drawer" className={`peer hover:shadow-inner shadow-black ${className}`}>
      {children}
    </button>
  );
});

interface DrawerContentProps {
  children: React.ReactNode;
  className: string;
  handle?: boolean;
}

const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>((props, ref) => {
  const transforms = `transform translate-y-[100%] duration-[0.5s] ease-[cubic-bezier(0.32,0.72,0,1)]`;
  const peer = `focus:transform-none peer-focus:transform peer-focus:translate-y-0 peer-focus:transition-transform peer-focus:duration-[0.5s] peer-focus:ease-[cubic-bezier(0.32,0.72,0,1)]`;
  return (
    <div
      tabIndex={0}
      ref={ref}
      className={`fixed overflow-hidden w-full bottom-0 right-0 ${transforms} ${peer} ${props.className}`}
    >
      {/*  */}
      {/*  */}
      {/*  */}

      {/*  */}
      {/*  */}
      {props.children}
    </div>
  );
});

interface HandleProps {
  className?: string;
}

const DrawerHandle = forwardRef<HTMLButtonElement, HandleProps>((props, ref) => (
  <>
    <button
      aria-label="drawer-handle"
      ref={ref}
      className={`absolute top-0  h-3 w-28 m-auto block mt-4 mb-1  ${props.className}`}
    />
  </>
));

const DrawerItem = (props: { children: ReactNode }) => {
  return (
    <>
      <div className="flex items-center justify-center">{props.children}</div>
    </>
  );
};

const Drawer = (props: { children: ReactNode }) => {
  return <>{props.children}</>;
};

export { Drawer, DrawerContent, DrawerHandle, DrawerItem, DrawerTrigger };
