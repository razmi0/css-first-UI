import { ReactNode } from "react";
import { DrawerContent, DrawerItem, DrawerTrigger } from "./components/Drawer";
// Drawer, DrawerHandle
function App() {
  return (
    <Drawer>
      <DrawerTrigger className="card outline btn">Open drawer</DrawerTrigger>
      {/* <Drawer> */}
      <DrawerContent handle className="h-[450px] flex items-center justify-center">
        <DrawerItem>Item 1</DrawerItem>
        <DrawerItem>Item 2</DrawerItem>
        <DrawerItem>Item 3</DrawerItem>
      </DrawerContent>
      {/* </Drawer> */}
    </Drawer>
  );
}

const Drawer = (props: { children: ReactNode }) => {
  return <>{props.children}</>;
};

export default App;
