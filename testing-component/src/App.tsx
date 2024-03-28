import { ReactNode } from "react";
import { DrawerContent, DrawerHandle, DrawerItem, DrawerTrigger } from "./components/Drawer";
function App() {
  return (
    <Drawer>
      <DrawerTrigger className="card outline btn">Open drawer</DrawerTrigger>
      <DrawerContent className="h-[450px] flex items-center justify-center shadow-sm bg-[#243342] rounded-tl-[0.5em] rounded-tr-[0.5em] card ">
        <DrawerHandle className="rounded-full card shadow-md bg-[#212121]" />
        <DrawerItem>Item 1</DrawerItem>
        <DrawerItem>Item 2</DrawerItem>
        <DrawerItem>Item 3</DrawerItem>
      </DrawerContent>
    </Drawer>
  );
}

const Drawer = (props: { children: ReactNode }) => {
  return <>{props.children}</>;
};

export default App;
