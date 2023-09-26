"use client";

import { useAuthContext } from "@/lib/context/authContext";
import { useEffect, useState } from "react";
import NewUser from "./newUser";
import { useModalContext } from "@/lib/context/modalContext";
import SignInForm from "./SigninForm";
import SignOutForm from "./signOutForm";

export default function ModalCheck() {
  const [newUser, setNewUser] = useState(false);
  const { openSignIn, openSignOut, signInOpen, signOutOpen } =
    useModalContext()!;
  const { user } = useAuthContext();
  useEffect(() => {
    if (user && !user.verified) {
      setNewUser(true);
    } else {
      setNewUser(false);
    }
  }, [user]);

  return (
    <>
      {newUser && (
        <NewUser newUser={newUser} setNewUser={setNewUser} user={user!} />
      )}
      {signInOpen && <SignInForm isOpen={signInOpen} setIsOpen={openSignIn} />}
      {signOutOpen && (
        <SignOutForm isOpen={signOutOpen} closeModal={openSignOut} />
      )}
    </>
  );
}
