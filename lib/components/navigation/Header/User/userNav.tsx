"use client";

import UserMenu from "./userMenu";
import SignIn from "./SignIn";
import { useEffect, useState } from "react";
import { Session } from "next-auth";

export default function UserNav({ session }: { session: Session | null }) {
  const user = session?.user;
  const [img, setImg] = useState(
    user?.image || "/images/Sarcastonaut Fallback.png"
  );

  useEffect(() => {
    setImg(user?.image || "/images/Sarcastonaut Fallback.png");
  }, [user]);

  return (
    <div className="flex my-auto items-center">
      {user ? <UserMenu imgSrc={img} /> : <SignIn />}
    </div>
  );
}
