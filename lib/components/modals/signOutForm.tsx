import { auth } from "@/lib/api/firebase";
import NoLeaveSociety from "@/lib/resources/svg/NoLeaveSociety";
import { SITE_URL } from "@/lib/utils/constants";
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
        <Dialog.Panel className="mx-auto max-w-[420px] w-full bg-always-light rounded-xl cshadow-lg-dark">
          <div className="p-6 pt-6 bg-always-dark rounded-t-xl flex flex-col gap-8">
            <NoLeaveSociety className="fill-always-light aspect-[2/1] h-[60px] mx-auto my-2 leading-0" />
            <Dialog.Title className="text-center text-head3 text-always-light leading-none">
              Sign Out of Account
            </Dialog.Title>
          </div>
          <div className="flex flex-col justify-center gap-6 p-6">
            <Dialog.Description className="text-center text-always-dark">
              Are you sure you want to sign out?
            </Dialog.Description>

            <button
              className="flex px-6 py-2 items-center justify-center bg-primary-500 text-always-light transition-colors duration-300 transform border rounded-lg hover:bg-primary-600 w-full"
              onClick={async () => {
                signOut(auth);
                fetch(`/api/signin`, {
                  method: "DELETE",
                });
                closeModal();
              }}
            >
              Confirm Sign Out
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
