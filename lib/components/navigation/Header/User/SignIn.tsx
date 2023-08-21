import { useState } from "react";
import SignInForm from "./SigninForm";

export default function SignIn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="text-lg font-head font-hdw tracking-hs cursor-pointer hover:text-primary hover:underline leading-none"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Sign In
      </button>

      <SignInForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
