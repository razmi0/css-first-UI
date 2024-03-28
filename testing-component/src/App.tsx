import { Drawer, DrawerContent, DrawerTrigger } from "./components/Drawer";

function App() {
  return (
    <Drawer>
      <DrawerTrigger>Open drawer</DrawerTrigger>
      <DrawerContent>I'm a drawer content</DrawerContent>
    </Drawer>
  );
}

export default App;
