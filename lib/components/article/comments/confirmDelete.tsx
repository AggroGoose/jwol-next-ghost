import { Dialog } from "@headlessui/react";

export default function ConfirmDelete({
  deleteOpen,
  deleteFunc,
  closeModal,
  deleteType,
}: {
  deleteOpen: boolean;
  deleteFunc: () => void;
  closeModal: () => void;
  deleteType: "Comment" | "Reply";
}) {
  return (
    <Dialog
      open={deleteOpen}
      className="relative z-50"
      onClose={() => closeModal()}
    >
      <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto border-always-dark max-w-[420px] w-full rounded-xl cshadow-lg-flip overflow-hidden">
          <div className="p-6 pt-6 bg-always-dark flex flex-col gap-8">
            <Dialog.Title className="text-center text-head3 text-always-light leading-none">
              {`Delete ${deleteType}`}
            </Dialog.Title>
          </div>
          <div className="flex flex-col justify-center gap-6 bg-always-light p-6">
            <Dialog.Description className="text-center text-always-dark">
              {`Are you sure you want to delete this ${deleteType.toLowerCase()}?`}
            </Dialog.Description>

            <button
              className="flex px-6 py-2 items-center justify-center bg-warning text-always-light transition-colors duration-300 transform border rounded-lg hover:bg-hover-warning w-full"
              onClick={deleteFunc}
            >
              Confirm Delete
            </button>

            <button
              className="w-full px-6 py-2 font-bold bg-transparent text-primary-500 transition-colors duration-300 transform rounded-lg leading-none hover:bg-primary-500 hover:text-always-light focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 border-[3px] border-primary-500"
              onClick={closeModal}
            >
              Cancel Go Back
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
