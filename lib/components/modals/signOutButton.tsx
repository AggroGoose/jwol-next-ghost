"use server";

import { signOut } from "@/lib/api/auth";

export default async function SignOutButton() {
  const signOutt = async () => {
    "use server";
    await signOut({ redirect: false });
  };
  return (
    <form action={signOutt}>
      <button
        className="flex px-6 py-2 items-center justify-center bg-primary-500 text-always-light transition-colors duration-300 transform border rounded-lg hover:bg-primary-600 w-full"
        type="submit"
      >
        Confirm Sign Out
      </button>
    </form>
  );
}
