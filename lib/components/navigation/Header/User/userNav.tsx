"use client";
import { useAuthContext } from "@/lib/context/authContext";
import UserMenu from "./userMenu";
import SignIn from "./SignIn";
import { useEffect, useState } from "react";

export default function UserNav() {
  const { user } = useAuthContext();
  const [img, setImg] = useState(user?.image || "/images/NoLeaveFallback.png");

  useEffect(() => {
    setImg(user?.image || "/images/NoLeaveFallback.png");
  }, [user]);

  return (
    <div className="flex my-auto items-center">
      {user ? <UserMenu imgSrc={img} /> : <SignIn />}
    </div>
  );
}
