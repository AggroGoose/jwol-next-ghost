"use client";
import { useAuthContext } from "@/lib/context/authContext";
import { UserMenu } from "./userMenu";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/api/firebase";

export default function UserNav() {
  const { user } = useAuthContext();

  console.log(user);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  if (user) {
    return (
      <div className="main-usernav">
        <UserMenu imgSrc={user?.image} />
      </div>
    );
  }

  return (
    <div className="main-usernav">
      <button className="main-usernav--login" onClick={signInWithGoogle}>
        Sign In
      </button>
    </div>
  );
}
