"use client";

import { useContext, createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../api/firebase";
import { NlUser } from "@/globals";
import { getOrCreateUser } from "../api/server/serverActions";
import { SITE_URL } from "../utils/constants";

export const AuthContext = createContext<{
  user: NlUser | null;
  intake: ((username: string, image: string) => void) | null;
}>({
  user: null,
  intake: null,
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<NlUser | null>(null);
  function intakeUser(username: string, image: string) {
    if (!user) return;
    const updatedUser = user;
    user.image = image;
    user.username = username;
    user.verified = true;
    setUser(updatedUser);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      if (fbUser) {
        const res = await fetch(`/api/ganso/user/${fbUser.uid}`, {
          next: { tags: [fbUser.uid] },
        })
          .then((response) => response.json())
          .catch((error) => console.error(error));
        if (!res) {
          const nlUser: NlUser = {
            ...fbUser,
            verified: false,
            banned: false,
          };
          setUser(nlUser);
        } else {
          const dbUser = res as GansoDBUser;
          const nlUser: NlUser = {
            ...fbUser,
            verified: dbUser.verified,
            banned: dbUser.banned,
          };
          if (dbUser.username.Valid) nlUser.username = dbUser.username.String;
          if (dbUser.image.Valid) nlUser.image = dbUser.image.String;
          setUser(nlUser);
        }
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, intake: intakeUser }}>
      {children}
    </AuthContext.Provider>
  );
};
