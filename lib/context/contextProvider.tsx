import QueryProvider from "./queryClient";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QueryProvider>{children}</QueryProvider>;
}
