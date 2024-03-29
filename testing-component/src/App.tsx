import { ReactNode } from "react";
import Background from "./components/Backgrounds";
import { Drawer, DrawerContent, DrawerHandle, DrawerItem, DrawerTrigger } from "./components/Drawer";

function App() {
  return (
    <>
      <ModalTrigger>Open modal</ModalTrigger>
      {/* <div
        id="1"
        className="fixed top-0 left-0 transform w-[100vw] h-[100vh] bg-black/40 flex items-center justify-center opacity-0 -z-50 peer-focus:opacity-100 peer-focus:z-50 focus:opacity-100 focus:z-50"
        tabIndex={0}
      > */}
      <ModalContent>
        <div id="2" className="bg-slate-400 h-48 w-80 group-focus:bg-red-600 flex flex-col justify-between">
          <h3>Modal Title</h3>
          <small>Modal small</small>
          <p>Modal content</p>
          <input type="text" />
          <button className="card btn ghost w-fit">Close</button>
        </div>
      </ModalContent>
      {/* </div> */}
    </>
  );
}

const ModalTrigger = (props: { children: ReactNode }) => (
  <button className="peer ghost btn card group">{props.children}</button>
);

const ModalContent = (props: { children: ReactNode }) => (
  <div
    id="1"
    className="fixed top-0 left-0 transform w-[100vw] h-[100vh] bg-black/40 flex items-center justify-center opacity-0 -z-50 peer-focus:opacity-100 peer-focus:z-50 focus:opacity-100 focus:z-50"
    tabIndex={0}
  >
    {props.children}
  </div>
);

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
