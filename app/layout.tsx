import "./tailwind.css";
import localFont from "next/font/local";
import GoogleAnalytics from "@/lib/components/googleAnalytics";
import CookieBanner from "@/lib/components/banners/cookieBanner";
import FooterNav from "@/lib/components/navigation/footerNav";
import { Metadata } from "next";
import SideNav from "@/lib/components/navigation/sideNav";
import TopNav from "@/lib/components/navigation/topNav";
import ModalCheck from "@/lib/components/modals/modalCheck";
import ContextProvider from "@/lib/context/contextProvider";

const ptSerif = localFont({
  src: [
    { path: "/font/PTSerif-Regular.ttf", style: "normal", weight: "400" },
    { path: "/font/PTSerif-Bold.ttf", style: "normal", weight: "700" },
    { path: "/font/PTSerif-Italic.ttf", style: "italic", weight: "400" },
    { path: "/font/PTSerif-BoldItalic.ttf", style: "italic", weight: "700" },
  ],
  variable: "--font-primary",
  display: "swap",
});

const montserrat = localFont({
  src: [
    { path: "/font/Montserrat.ttf", style: "normal" },
    { path: "/font/Montserrat-Italic.ttf", style: "italic" },
  ],
  variable: "--font-secondary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "No Leave Society",
  description:
    "Journal on mental health, food, and society focused on breaking societal expectations, embracing the weird in all of us, and seeking new perspectives.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${ptSerif.variable}`}>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-JC47HREZJY" />
      <body>
        <ContextProvider>
          <div className="grid grid-cols-sideBar max-w-[100vw] break-words bg-subtle-light">
            <div className="fixed w-screen h-screen top-0 -z-[2]" />
            <SideNav />
            <main className="content-grid min-h-screen grid grid-cols-1 xl:grid-cols-mainGrid">
              <TopNav />
              <ModalCheck />
              {children}
            </main>
          </div>
          <FooterNav />
          <CookieBanner />
        </ContextProvider>
      </body>
    </html>
  );
}
