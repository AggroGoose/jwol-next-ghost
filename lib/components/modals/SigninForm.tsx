import { auth } from "@/lib/api/firebase";
import NoLeaveSociety from "@/lib/resources/svg/NoLeaveSociety";
import GoogleLogo from "@/lib/resources/svg/social/google";
import { SITE_URL } from "@/lib/utils/constants";
import { Dialog } from "@headlessui/react";
import {
  GoogleAuthProvider,
  sendSignInLinkToEmail,
  signInWithPopup,
} from "firebase/auth";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";

type ValidateState = {
  status: "success" | "error" | "none";
  message: string;
};

export default function SignInForm({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: () => void;
}) {
  const [signInFeedback, setSignInFeedback] = useState<ValidateState>({
    status: "none",
    message: "",
  });
  const emailInput = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(auth, provider);
    const idToken = await credential.user.getIdToken();
    await fetch(`/api/signin`, {
      method: "POST",
      body: JSON.stringify({ idToken }),
    });
    setIsOpen();
  };

  const signInWithEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!emailInput.current?.value) {
      setSignInFeedback({
        status: "error",
        message: "Please enter an e-mail.",
      });
      return;
    }
    const email = emailInput.current.value;
    const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (!isValid) {
      setSignInFeedback({
        status: "error",
        message: "Please enter a valid e-mail address.",
      });
      return;
    }
    const actionCodeSettings = {
      url: SITE_URL + `login?path=${pathname}`,
      handleCodeInApp: true,
    };
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch((err) => console.error(err));

    setSignInFeedback({
      status: "success",
      message: `E-mail sent successfully! Your path is ${pathname}`,
    });
  };

  return (
    <Dialog open={isOpen} className="relative z-50" onClose={() => setIsOpen()}>
      <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-[420px] w-full bg-always-light rounded-xl shadow-darklg">
          <div className="p-6 pt-6 bg-always-dark rounded-t-xl flex flex-col gap-8">
            <NoLeaveSociety className="fill-always-light aspect-[2/1] h-[60px] mx-auto my-2 leading-0" />
            <Dialog.Title className="text-center text-head3 text-always-light leading-none">
              Sign Into Your Account
            </Dialog.Title>
          </div>
          <div className="flex flex-col justify-center gap-6 p-6">
            <Dialog.Description className="text-center text-always-dark">
              Please sign in with one of the options below:
            </Dialog.Description>

            <button
              className="flex items-center justify-center bg-primary-500 text-always-light transition-colors duration-300 transform border rounded-lg hover:bg-primary-600 w-full"
              onClick={signInWithGoogle}
            >
              <div className="flex gap-6">
                <GoogleLogo className="w-6 h-6 my-auto" />

                <span className="py-2 font-medium text-center">
                  Sign in with Google
                </span>
              </div>
            </button>
            <div className="flex items-center justify-between">
              <span className="w-1/5 border-b border-gray-500" />

              <span className="text-xs text-center text-gray-500 capitalize">
                or login with email
              </span>

              <span className="w-1/5 border-b border-gray-500" />
            </div>
            <form className="w-full flex flex-col gap-6">
              <div>
                <label
                  className="block mb-1 text-xs font-medium text-gray-600"
                  htmlFor="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <input
                  ref={emailInput}
                  id="LoggingEmailAddress"
                  className="block w-full px-4 py-2 text-always-dark bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300 leading-none"
                  type="email"
                />
                {signInFeedback.status !== "none" && (
                  <p
                    className={`text-xs font-bold italic mt-1 text-center ${
                      signInFeedback.status === "error"
                        ? "text-accent-400"
                        : "text-primary-500"
                    }`}
                  >
                    {signInFeedback.message}
                  </p>
                )}
              </div>
              <button
                className="w-full px-6 py-2 font-bold bg-transparent text-primary-500 transition-colors duration-300 transform rounded-lg leading-none hover:bg-primary-500 hover:text-always-light focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 border-[3px] border-primary-500"
                onClick={signInWithEmail}
              >
                Send E-mail Link
              </button>
            </form>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
