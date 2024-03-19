import { auth } from "@/lib/api/auth";
import DropMenu from "./Menu/dropMenu";
import UserMenu from "./User/userMenu";
import SignIn from "./User/SignIn";

export default async function RightNav() {
  const session = await auth();
  const user = session?.user;

  return (
    <nav className="col-start-2 lg:col-start-3 justify-self-end text-always-light flex gap-4 mr-4 md:mr-[40px] xl:mr-0">
      <div className="flex my-auto items-center">
        {user ? <UserMenu user={user} /> : <SignIn />}
      </div>
      <DropMenu />
    </nav>
  );
}
