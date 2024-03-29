import Background from "./components/Backgrounds";
import { Drawer, DrawerContent, DrawerHandle, DrawerTrigger } from "./components/Drawer";
import { Modal, ModalCloseTrigger, ModalContent, ModalCross, ModalOverlay, ModalTrigger } from "./components/Modal";

function App() {
  return (
    <>
      <div className="h-20 w-20 bg-white absolute top-0"></div>
      <ModalExemple />
      <DrawerExemple />
    </>
  );
}

const DrawerExemple = () => {
  return (
    <Drawer>
      <DrawerTrigger className="card ghost btn">Open drawer</DrawerTrigger>
      <DrawerContent className="h-[450px] flex items-center justify-center shadow-sm bg-[#243342] rounded-tl-[0.5em] rounded-tr-[0.5em] card">
        <Background type="mosaic" className="opacity-5" />
        <DrawerHandle className="rounded-full card shadow-md bg-[#212121]" />
      </DrawerContent>
    </Drawer>
  );
};

const ModalExemple = () => {
  return (
    <Modal>
      <ModalTrigger className="ghost btn card">Open modal</ModalTrigger>
      <ModalOverlay className="bg-black/40 backdrop-blur-sm" />
      <ModalContent className="card px-3 py-2 bg-[#243342] rounded-md shadow-lg shadow-black">
        <ModalCross />
        <Background type="mosaic" className="opacity-5" />
        <LoremContent />
        <div className="flex flex-row-reverse">
          <ModalCloseTrigger className="card btn ghost w-fit rounded-md relative mt-3">Close</ModalCloseTrigger>
        </div>
      </ModalContent>
    </Modal>
  );
};

const LoremContent = () => {
  return (
    <>
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
    </>
  );
};
export default App;
