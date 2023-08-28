import { AuthContextProvider } from "./authContext";
import { ModalContextProvider } from "./modalContext";
import QueryProvider from "./queryClient";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <QueryProvider>{children}</QueryProvider>
      </ModalContextProvider>
    </AuthContextProvider>
  );
}
