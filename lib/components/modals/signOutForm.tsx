import { auth } from "@/lib/api/firebase";
import NoLeaveSociety from "@/lib/resources/svg/NoLeaveSociety";
import { Dialog } from "@headlessui/react";
import { signOut } from "firebase/auth";

export default function SignOutForm({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  return (
    <Dialog
      open={isOpen}
      className="relative z-50"
      onClose={() => closeModal()}
    >
      <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-[420px] w-full bg-base-100 rounded-xl shadow-darklg">
          <div className="p-6 pt-6 bg-neutral rounded-t-xl flex flex-col gap-8">
            <NoLeaveSociety className="fill-base-100 aspect-[2/1] h-[60px] mx-auto my-2 leading-0" />
            <Dialog.Title className="text-center text-head3 text-base-100 leading-none">
              Sign Out of Account
            </Dialog.Title>
          </div>
          <div className="flex flex-col justify-center gap-6 p-6">
            <Dialog.Description className="text-center text-neutral">
              Are you sure you want to sign out?
            </Dialog.Description>

            <button
              className="flex px-6 py-2 items-center justify-center bg-secondary text-base-100 transition-colors duration-300 transform border rounded-lg hover:bg-primary w-full"
              onClick={() => {
                signOut(auth);
                closeModal();
              }}
            >
              Confirm Sign Out
            </button>

            <button
              className="w-full px-6 py-2 font-bold bg-transparent text-secondary transition-colors duration-300 transform rounded-lg leading-none hover:bg-secondary hover:text-base-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 border-[3px] border-secondary"
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
