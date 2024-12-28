import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
} from '@nextui-org/react';

export interface IdrawerContents {
  title: string;
  action: () => void;
}

interface IBottomDrawerProps {
  isOpen?: boolean;
  onOpenChange?: () => void;
  contents?: IdrawerContents[];
}

export default function BottomDrawer({
  isOpen = false,
  onOpenChange = () => {},
  contents = [],
}: IBottomDrawerProps) {
  return (
    <Drawer
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="bottom"
      hideCloseButton
    >
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader>
              <Button
                onPress={onClose}
                className="mx-auto h-1 w-12 bg-gray-100"
              />
            </DrawerHeader>
            <DrawerBody className="px-0">
              <ul className="text-14px font-normal">
                {contents.map(({ title, action }) => (
                  <li key={title}>
                    <button
                      type="button"
                      onClick={action}
                      className="w-full px-[26px] py-[14px] text-start"
                    >
                      {title}
                    </button>
                  </li>
                ))}
              </ul>
            </DrawerBody>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
