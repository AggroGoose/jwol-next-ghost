import { NlUser } from "@/globals";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import SetUsername from "./registration/setUsername";
import UploadImage from "./registration/uploadImage";
import ConfirmRegister from "./registration/confirmRegister";

export default function NewUser({
  newUser,
  setNewUser,
  user,
}: {
  newUser: boolean;
  setNewUser: React.Dispatch<boolean>;
  user: NlUser;
}) {
  const [username, setUsername] = useState(user.username || null);
  const [image, setImage] = useState(
    user.image || user.photoURL || "/images/NoLeaveFallback.png"
  );
  const [step, setStep] = useState<1 | 2 | 3>(1);
  return (
    <Dialog
      open={newUser}
      className="relative z-50"
      onClose={() => setNewUser(false)}
    >
      <div className="fixed inset-0 bg-black/10" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-[520px] w-full bg-always-light text-always-dark p-6 rounded-xl cshadow-lg-dark">
          <Dialog.Title className="text-center text-head3 leading-none my-4">
            Finish Account Setup
          </Dialog.Title>
          <div className="flex flex-col justify-center gap-6 mt-6">
            {step === 1 && (
              <SetUsername
                username={username}
                setUsername={setUsername}
                setStep={setStep}
              />
            )}
            {step === 2 && (
              <UploadImage
                image={image}
                setImage={setImage}
                setStep={setStep}
                userId={user.uid}
              />
            )}
            {step === 3 && (
              <ConfirmRegister
                image={image}
                username={username!}
                userId={user.uid}
                setStep={setStep}
                setNewUser={setNewUser}
              />
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
