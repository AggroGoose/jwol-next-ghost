import EllipsisIcon from "@/lib/resources/svg/icons/ellipsisIcon";
import { Menu, Popover } from "@headlessui/react";

export default function ResponseMenu({
  editFunc,
  deleteFunc,
}: {
  editFunc: () => void;
  deleteFunc: () => void;
}) {
  return (
    <Menu as="div" className="relative ml-auto self-start">
      <Menu.Button className="transition-transform duration-300 ease-in-out ui-not-open:rotate-0 ui-open:rotate-90">
        <EllipsisIcon className="h-6 w-6" />
      </Menu.Button>
      <Menu.Items className="absolute right-0 z-10 bg-base-100 py-4 shadow-darkmd rounded-lg min-w-[128px]">
        <Menu.Item
          as="button"
          className={`w-full font-semibold text-secondary px-4 py-2 text-sm leading-none text-left transition-color duration-300 ui-active:bg-secondary ui-active:text-base-100`}
          onClick={editFunc}
        >
          Edit
        </Menu.Item>

        <Menu.Item
          as="button"
          className={`w-full font-semibold text-primary px-4 py-2 text-sm leading-none text-left transition-color duration-300 ui-active:bg-primary ui-active:text-base-100`}
          onClick={deleteFunc}
        >
          Delete
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
