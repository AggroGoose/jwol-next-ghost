import AuthProvider from "@/lib/components/authProvider";
import HeaderNav from "@/lib/components/navigation/headerNav";
import "@/lib/styles/global.scss";
import { Inter, PT_Serif } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
});

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

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
      <html lang="en" className={`${ptSerif.variable} ${inter.variable}`}>
        <link rel="icon" href="/favicon/JakosBalay-32.png" sizes="32x32" />
        <link rel="icon" href="/favicon/JakosBalay-128.png" sizes="128x128" />
        <link rel="icon" href="/favicon/JakosBalay-180.png" sizes="180x180" />
        <link rel="icon" href="/favicon/JakosBalay-192.png" sizes="192x192" />
        <body>
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
