"use client";
import { useAuthContext } from "@/lib/context/authContext";
import { UserMenu } from "./userMenu";
import SignIn from "./SignIn";

export default function UserNav() {
  const { user } = useAuthContext();

  return (
    <div className="flex my-auto items-center">
      {user ? <UserMenu imgSrc={user?.image} /> : <SignIn />}
    </div>
  );
}
