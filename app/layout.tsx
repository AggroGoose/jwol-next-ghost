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

// const nunito = localFont({
//   src: [
//     { path: "/font/Nunito.ttf", style: "normal" },
//     { path: "/font/Nunito-Italic.ttf", style: "italic" },
//   ],
//   variable: "--font-primary",
//   display: "swap",
// });

const nunito = localFont({
  src: [
    { path: "/font/NunitoSans.ttf", style: "normal" },
    { path: "/font/NunitoSans-Italic.ttf", style: "italic" },
  ],
  variable: "--font-primary",
  display: "swap",
});

const passionOne = localFont({
  src: [{ path: "/font/PassionOne.ttf", style: "normal" }],
  variable: "--font-secondary",
  display: "swap",
});

const philly = localFont({
  src: [{ path: "/font/PhillySans.otf", style: "normal" }],
  variable: "--font-tertiary",
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
    <html
      lang="en"
      className={`${philly.variable} ${nunito.variable} ${passionOne.variable}`}
    >
      <GoogleAnalytics GA_MEASUREMENT_ID="G-JC47HREZJY" />
      <body>
        <ContextProvider>
          <div className="grid grid-cols-sideBar bg-base-100">
            <SideNav />
            <div className="content-grid min-h-screen grid grid-cols-1 mt-6 lg:grid-cols-mainGrid">
              <TopNav />
              <ModalCheck />
              {children}
            </div>
          </div>
          <FooterNav />
          <CookieBanner />
        </ContextProvider>
      </body>
    </html>
  );
}
