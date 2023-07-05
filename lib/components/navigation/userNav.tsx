import Link from "next/link";
import { UserLoginLogout } from "./userLoginLogout";

export default function UserNav() {
  return (
    <div className="main-usernav">
      <UserLoginLogout />
    </div>
  );
}
