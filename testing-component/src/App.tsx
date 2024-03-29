import Background from "./components/Backgrounds";
import { Drawer, DrawerContent, DrawerHandle, DrawerItem, DrawerTrigger } from "./components/Drawer";

function App() {
  //
  //
  //
  //
  //
  return (
    <Drawer>
      <DrawerTrigger className="card outline btn">Open drawer</DrawerTrigger>
      <DrawerContent className="h-[450px] flex items-center justify-center shadow-sm bg-[#243342] rounded-tl-[0.5em] rounded-tr-[0.5em] card ">
        <Background type="Grunge" className="opacity-5 bg-black" />
        <DrawerHandle className="rounded-full card shadow-md bg-[#212121] " />
        <DrawerItem>Item 1</DrawerItem>
        <DrawerItem>Item 2</DrawerItem>
        <DrawerItem>Item 3</DrawerItem>
      </DrawerContent>
    </Drawer>
  );
}

export default App;
