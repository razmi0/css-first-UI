import { ReactNode, forwardRef } from "react";
import Background from "./components/Backgrounds";
import {
  Drawer,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHandle,
  DrawerOverlay,
  DrawerTrigger,
} from "./components/Drawer";
import { Modal, ModalCloseTrigger, ModalContent, ModalCross, ModalOverlay, ModalTrigger } from "./components/Modal";
import RainbowHeader from "./components/RainbowHeader";

function App() {
  return (
    <>
      <RainbowHeader />
      <ModalExemple />
      <DrawerExemple />
    </>
  );
}

const DrawerExemple = () => {
  return (
    <Drawer>
      <DrawerTrigger className="hover:shadow-inner shadow-black card ghost btn ml-2">Open drawer</DrawerTrigger>
      <DrawerOverlay className="bg-black/40 backdrop-blur-sm" />
      <DrawerContent className="h-[450px] flex items-center justify-center shadow-sm bg-[#243342] rounded-tl-[0.5em] rounded-tr-[0.5em] card">
        <Background type="mosaic" className="opacity-5" />
        <DrawerHandle className="rounded-full card shadow-md bg-[#212121] hover:bg-neutral-800 transition-colors" />
        <LoremContent className="flex flex-col w-1/2">
          <div className="flex flex-row-reverse">
            <DrawerCloseTrigger className="card btn ghost w-fit rounded-md relative mt-3">
              <span className="px-12">Close</span>
            </DrawerCloseTrigger>
          </div>
        </LoremContent>
      </DrawerContent>
    </Drawer>
  );
};

const ModalExemple = () => {
  return (
    <Modal>
      <ModalTrigger className="ghost btn card">Open modal</ModalTrigger>
      <ModalOverlay className="bg-black/40 backdrop-blur-sm" />
      <ModalContent className="card px-4 py-3 bg-[#243342] rounded-md shadow-lg shadow-black">
        <Background type="mosaic" className="opacity-5" />
        <ModalCross />
        <LoremContent />
        <div className="flex flex-row-reverse">
          <ModalCloseTrigger className="card btn ghost w-fit rounded-md relative mt-3">
            <span className="px-12">Close</span>
          </ModalCloseTrigger>
        </div>
      </ModalContent>
    </Modal>
  );
};

const LoremContent = forwardRef<HTMLDivElement, { children?: ReactNode; className?: string }>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={className}>
        <h3 className="text-xl">Exemple Title</h3>
        <small className="text-slate-400">Exemple subtitle</small>
        <p className="w-full my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ullam aliquam perspiciatis sunt voluptate optio
          sit labore, tempore amet illo dolor est iusto aliquid vero architecto maxime aut. Nemo, hic!
        </p>
        <label htmlFor="input" className="flex flex-col text-slate-400 text-sm font-semibold w-full justify-between">
          Exemple label
        </label>
        <div className="flex items-end h-10">
          <input
            placeholder="Exemple placeholder.."
            type="text"
            id="input"
            className="h-full w-full text-black focus:outline-none rounded-md bg-slate-200 pl-2 border border-[#254b6c6b]"
          />
        </div>
        {children}
      </div>
    );
  }
);
export default App;
