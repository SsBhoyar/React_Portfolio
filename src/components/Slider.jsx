import { Drawer } from 'vaul';

const Slider = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger>Open</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content>
          <p>Content</p>
        </Drawer.Content>
        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default Slider;