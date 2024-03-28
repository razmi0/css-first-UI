import { ReactNode, forwardRef } from "react";

interface DrawerContentProps {
  children: React.ReactNode;
  className: string;
  handle?: boolean;
}

const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>((props, ref) => {
  // console.log(typeof (<Handle />).type.toString()); // .test(/drawer-handle/g)
  return (
    <div
      tabIndex={0}
      ref={ref}
      className={`fixed overflow-hidden w-full transform translate-y-[100%] duration-[0.5s] ease-[cubic-bezier(0.32,0.72,0,1)] bottom-0 right-0 focus:transform-none peer-focus:transform peer-focus:translate-y-0 peer-focus:transition-transform peer-focus:duration-[0.5s] peer-focus:ease-[cubic-bezier(0.32,0.72,0,1)] ${props.className}`}
    >
      <div aria-label="drawer-content" className="flex m-auto">
        {props.children}
      </div>
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

// const Drawer = (props: { children: ReactNode }) => {
//   return (
//     <div
//       className="fixed card shadow-sm overflow-hidden w-full transform translate-y-[100%] duration-[0.5s] ease-[cubic-bezier(0.32,0.72,0,1)] bg-[#243342] rounded-tl-[0.75em] rounded-tr-[0.75em] bottom-0 right-0 focus:transform-none peer-focus:transform peer-focus:translate-y-0 peer-focus:transition-transform peer-focus:duration-[0.5s] peer-focus:ease-[cubic-bezier(0.32,0.72,0,1)]"
//       tabIndex={0}
//     >
//       {props.children}
//     </div>
//   );
// };

// const Drawer = (props: { children: ReactNode }) => {
//   return (

//       {props.children}
//     </div>
//   );
// };

// const DrawerTrigger = forwardRef<>(({ children }, ref) => {
//   return (
//     <>
//       <button ref={ref} aria-label="trigger-drawer" className="peer hover:shadow-inner shadow-black">
//         {children}
//       </button>
//     </>
//   );
// });

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

const DrawerItem = (props: { children: ReactNode }) => {
  return (
    <>
      <div className="flex items-center justify-center">{props.children}</div>
    </>
  );
};

export { DrawerContent, DrawerHandle, DrawerItem, DrawerTrigger };
