"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { UserMenu } from "./userMenu";

export default function UserNav() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="main-usernav">...</div>;
  } else if (status === "authenticated") {
    return (
      <div className="main-usernav">
        <UserMenu imgSrc={session.user?.image} />
      </div>
    );
  }

  return (
    <div className="main-usernav">
      <button className="main-usernav--login" onClick={() => signIn()}>
        Sign In
      </button>
    </div>
  );
}
