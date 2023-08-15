"use client";

import { useContext, createContext, useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../api/firebase";
import { SITE_SERVER } from "../utils/constants";

export const AuthContext = createContext<{ user: NlUser | null }>({
  user: null,
});

export const useAuthContext = () => useContext(AuthContext);

interface NlUser extends User {
  username?: string;
  image?: string;
  verified: boolean;
  banned: boolean;
}

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<NlUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const res = await fetch(`${SITE_SERVER}user/GetorCreate/${user.uid}`, {
          method: "POST",
        })
          .then((res) => res.json())
          .catch((err) => console.error(err));

        if (!res) {
          const nlUser: NlUser = {
            ...user,
            verified: false,
            banned: false,
          };
          setUser(nlUser);
        } else {
          const dbUser = res as GansoDBUser;
          const nlUser: NlUser = {
            ...user,
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
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
