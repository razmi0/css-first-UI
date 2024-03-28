import { DrawerContent, DrawerItem, DrawerTrigger } from "./components/Drawer";
// Drawer, DrawerHandle
function App() {
  return (
    <>
      {/* // <Drawer> */}
      <DrawerTrigger className="card outline btn">Open drawer</DrawerTrigger>
      <DrawerContent>
        {/* <DrawerHandle /> */}
        <DrawerItem>Item 1</DrawerItem>
        <DrawerItem>Item 2</DrawerItem>
        <DrawerItem>Item 3</DrawerItem>
      </DrawerContent>
      {/* // </Drawer> */}
    </>
  );
}

export default App;
