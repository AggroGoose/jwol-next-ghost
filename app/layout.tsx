import AuthProvider from "@/lib/components/authProvider";
import HeaderNav from "@/lib/components/navigation/headerNav";
import "@/lib/styles/global.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jako's Balay",
  description: "A house big enough for all of us.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <link rel="icon" href="/favicon/JakosBalay-32.png" sizes="32x32" />
        <link rel="icon" href="/favicon/JakosBalay-128.png" sizes="128x128" />
        <link rel="icon" href="/favicon/JakosBalay-180.png" sizes="180x180" />
        <link rel="icon" href="/favicon/JakosBalay-192.png" sizes="192x192" />
        <body className={inter.className}>
          <div id="modalPortal" />
          <div className="main">
            <HeaderNav />
            <div className="main-content">{children}</div>
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
