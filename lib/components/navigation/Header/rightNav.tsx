import UserNav from "./User/userNav";

export default function RightNav() {
  return (
    <nav className="col-start-3 justify-self-end mr-2 md:mr-10 text-base-100 xl:text-neutral xl:fixed xl:top-6 xl:right-12 xl:m-0">
      <ul>
        <UserNav />
      </ul>
    </nav>
  );
}
