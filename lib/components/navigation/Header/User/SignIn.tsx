import { useModalContext } from "@/lib/context/modalContext";

export default function SignIn() {
  const { openSignIn } = useModalContext()!;

  return (
    <>
      <button
        className="text-lg font-head font-hdw tracking-hs cursor-pointer hover:text-primary hover:underline leading-none"
        onClick={openSignIn}
      >
        Sign In
      </button>
    </>
  );
}
