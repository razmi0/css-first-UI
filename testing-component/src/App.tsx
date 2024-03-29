import { forwardRef, type ReactNode } from "react";
import Background from "./components/Backgrounds";
import { Drawer, DrawerContent, DrawerHandle, DrawerItem, DrawerTrigger } from "./components/Drawer";

function App() {
  return (
    <Modal>
      <ModalTrigger>Open modal</ModalTrigger>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseCross />
        <Background type="mosaic" className="opacity-5" />
        <h3 className="text-xl">Modal Title</h3>
        <small className="text-slate-400">Modal subtitle</small>
        <p className="w-full my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ullam aliquam perspiciatis sunt voluptate optio
          sit labore, tempore amet illo dolor est iusto aliquid vero architecto maxime aut. Nemo, hic!
        </p>
        <label htmlFor="input" className="flex flex-col text-slate-400 text-sm font-semibold w-full justify-between">
          Label
        </label>
        <div className="flex items-end h-10">
          <input
            type="text"
            id="input"
            className="h-full w-full text-black focus:outline-none rounded-tl-md rounded-bl-md bg-slate-200 pl-2 border border-[#254b6c6b]"
          />
          <button className="card btn ghost w-fit rounded-tl-none rounded-bl-none rounded-md " data-is="close-modal">
            Submit
          </button>
        </div>
      </ModalContent>
    </Modal>
  );
}

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

const ModalOverlay = () => {
  return (
    <div
      data-is="overlay"
      className="fixed top-0 left-0 peer-focus/modal-trigger:w-[100vw] peer-focus/modal-trigger:h-[100vh] bg-black/40 has-[+:focus-within]:w-[100vw] has-[+:focus-within]:h-[100vh] "
    ></div>
  );
};

const ModalCloseCross = forwardRef<SVGSVGElement, ModalCloseProps>((props, ref) => {
  return (
    <button className="absolute top-0 right-0 mt-2 mr-2" data-is="close-modal">
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 text-slate-400 hover:text-slate-300 transition-colors duration-200 ease-in-out ${props.className}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
});

const ModalTrigger = (props: { children: ReactNode }) => (
  <button className="peer/modal-trigger ghost btn card">{props.children}</button>
);

const ModalClose = (props: { children: ReactNode }) => {
  return <>{props.children}</>;
};

const ModalContent = (props: { children: ReactNode }) => {
  const styles = `card px-3 py-2 bg-[#243342] rounded-md shadow-lg shadow-black`;
  const atTheCenterStyles = `fixed top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]`;
  return (
    <>
      <div
        data-is="modal-content"
        className={`${atTheCenterStyles} opacity-0 -z-50 scale-0 peer-focus/modal-trigger:opacity-100 peer-focus/modal-trigger:z-50 peer-focus/modal-trigger:scale-100 focus-within:opacity-100 focus-within:z-50 focus-within:scale-100 ${styles}`} //  //hidden peer-focus/modal-trigger:block focus-within:block
        tabIndex={0}
      >
        {props.children}
      </div>
    </>
  );
};

const DrawerExemple = () => {
  <Drawer>
    <DrawerTrigger className="card ghost btn">Open drawer</DrawerTrigger>
    <DrawerContent className="h-[450px] flex items-center justify-center shadow-sm bg-[#243342] rounded-tl-[0.5em] rounded-tr-[0.5em] card">
      <Background type="mosaic" className="opacity-5" />
      <DrawerHandle className="rounded-full card shadow-md bg-[#212121]" />
      <DrawerItem>Item 1</DrawerItem>
      <DrawerItem>Item 2</DrawerItem>
      <DrawerItem>Item 3</DrawerItem>
    </DrawerContent>
  </Drawer>;
};
export default App;
