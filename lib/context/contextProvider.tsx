import { AuthContextProvider } from "./authContext";
import { ModalContextProvider } from "./modalContext";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContextProvider>
      <ModalContextProvider>{children}</ModalContextProvider>
    </AuthContextProvider>
  );
}
