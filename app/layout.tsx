import AuthProvider from "@/lib/components/authProvider";
import HeaderNav from "@/lib/components/navigation/headerNav";
import "@/lib/styles/global.scss";
import localFont from "next/font/local";
import GoogleAnalytics from "@/lib/components/googleAnalytics";
import CookieBanner from "@/lib/components/banners/cookieBanner";
import FooterNav from "@/lib/components/navigation/footerNav";

const nunito = localFont({
  src: [
    { path: "/font/Nunito.ttf", style: "normal" },
    { path: "/font/Nunito-Italic.ttf", style: "italic" },
  ],
  variable: "--font-primary",
  display: "swap",
});

const nunitoSans = localFont({
  src: [
    { path: "/font/NunitoSans.ttf", style: "normal" },
    { path: "/font/NunitoSans-Italic.ttf", style: "italic" },
  ],
  variable: "--font-secondary",
  display: "swap",
});

export const metadata = {
  title: "Josh Without Leave",
  description: "No permission needed to be you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en" className={`${nunito.variable} ${nunitoSans.variable}`}>
        <link rel="icon" href="/favicon/No Leave Icon-32.png" sizes="32x32" />
        <link
          rel="icon"
          href="/favicon/No Leave Icon-128.png"
          sizes="128x128"
        />
        <link
          rel="icon"
          href="/favicon/No Leave Icon-180.png"
          sizes="180x180"
        />
        <link
          rel="icon"
          href="/favicon/No Leave Icon-192.png"
          sizes="192x192"
        />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-JC47HREZJY" />
        <body>
          <div id="modalPortal" />
          <div className="main">
            <HeaderNav />
            <div className="main-content">{children}</div>
          </div>
          <FooterNav />
          <CookieBanner />
        </body>
      </html>
    </AuthProvider>
  );
}
