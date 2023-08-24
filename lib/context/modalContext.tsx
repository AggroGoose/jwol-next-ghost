"use client";

import { createContext, useContext, useState } from "react";

type ModalContext = {
  signInOpen: boolean;
  openSignIn: () => void;
  signOutOpen: boolean;
  openSignOut: () => void;
};

export const ModalContext = createContext<ModalContext | null>(null);

export const useModalContext = () => useContext(ModalContext);

export const ModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signOutOpen, setSignOutOpen] = useState(false);
  function openSignIn() {
    setSignInOpen(!signInOpen);
  }
  function openSignOut() {
    setSignOutOpen(!signOutOpen);
  }

  return (
    <ModalContext.Provider
      value={{ signInOpen, openSignIn, signOutOpen, openSignOut }}
    >
      {children}
    </ModalContext.Provider>
  );
};
