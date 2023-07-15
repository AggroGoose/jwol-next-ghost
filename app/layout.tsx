import AuthProvider from "@/lib/components/authProvider";
import HeaderNav from "@/lib/components/navigation/headerNav";
import "@/lib/styles/global.scss";
import localFont from "next/font/local";

const montserrat = localFont({
  src: [
    { path: "/font/Montserrat.ttf", style: "normal" },
    { path: "/font/Montserrat-Italic.ttf", style: "italic" },
  ],
  variable: "--font-secondary",
  display: "swap",
});

const bitter = localFont({
  src: [
    { path: "/font/Bitter.ttf", style: "normal" },
    { path: "/font/Bitter-Italic.ttf", style: "italic" },
  ],
  variable: "--font-primary",
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
      <html lang="en" className={`${montserrat.variable} ${bitter.variable}`}>
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
