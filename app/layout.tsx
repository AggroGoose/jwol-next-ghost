import HeaderNav from "@/lib/components/navigation/headerNav";
import "@/lib/styles/global.scss";
import localFont from "next/font/local";
import GoogleAnalytics from "@/lib/components/googleAnalytics";
import CookieBanner from "@/lib/components/banners/cookieBanner";
import FooterNav from "@/lib/components/navigation/footerNav";
import { Metadata } from "next";
import SideNav from "@/lib/components/navigation/sideNav";
import TopNav from "@/lib/components/navigation/topNav";
import { AuthContextProvider } from "@/lib/context/authContext";

const nunito = localFont({
  src: [
    { path: "/font/Nunito.ttf", style: "normal" },
    { path: "/font/Nunito-Italic.ttf", style: "italic" },
  ],
  variable: "--font-primary",
  display: "swap",
});

// const nunitoSans = localFont({
//   src: [
//     { path: "/font/NunitoSans.ttf", style: "normal" },
//     { path: "/font/NunitoSans-Italic.ttf", style: "italic" },
//   ],
//   variable: "--font-primary",
//   display: "swap",
// });

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
        <AuthContextProvider>
          <div id="modalPortal" />
          <div className="main layout-grid">
            <SideNav />
            <div className="main-content">
              <TopNav />
              {children}
            </div>
          </div>
          <FooterNav />
          <CookieBanner />
        </AuthContextProvider>
      </body>
    </html>
  );
}
