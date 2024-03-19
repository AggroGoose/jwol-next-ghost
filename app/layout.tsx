import "./tailwind.css";
import localFont from "next/font/local";
import { Lato } from "next/font/google";
import GoogleAnalytics from "@/lib/components/googleAnalytics";
import CookieBanner from "@/lib/components/banners/cookieBanner";
import FooterNav from "@/lib/components/navigation/footerNav";
import { Metadata } from "next";
import TopNav from "@/lib/components/navigation/topNav";
import ModalCheck from "@/lib/components/modals/modalCheck";
import ContextProvider from "@/lib/context/contextProvider";

const australSans = localFont({
  src: [{ path: "/font/austral-sans_blur.woff2" }],
  variable: "--font-secondary",
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Sarcastonaut",
  description:
    "We're lost in space and it's probably fine. Exploring the meaning of life, the world, and the brain one ship at a time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} ${australSans.variable}`}>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-JC47HREZJY" />
      <body>
        <ContextProvider>
          <main className="min-h-screen flex flex-col">
            <TopNav />
            {children}
          </main>
          <FooterNav />
          <CookieBanner />
        </ContextProvider>
      </body>
    </html>
  );
}
