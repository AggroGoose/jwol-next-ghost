"use client";

import { useAuthContext } from "@/lib/context/authContext";
import { useEffect, useState } from "react";

export default function ModalCheck() {
  const [newUser, setNewUser] = useState(false);
  const { user } = useAuthContext();
  useEffect(() => {
    if (user && !user.verified) {
      setNewUser(true);
    } else {
      setNewUser(false);
    }
  }, [user]);
  return <></>;
}
