import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/styles.scss"
import HeaderSecondary from "@/components/common/HeaderSecondaryHome";
import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "STREWTH",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" touchevents svgasimg placeholder csstransitions csstransforms hashchange inputtypes-search inputtypes-tel inputtypes-url inputtypes-email no-inputtypes-datetime inputtypes-date inputtypes-month inputtypes-week inputtypes-time inputtypes-datetime-local inputtypes-number inputtypes-range inputtypes-color objectfit object-fit no-maybemobile wf-roboto-n3-active wf-cabin-n7-active wf-active">
      <head>
        <link
          rel="icon"
          href="/icon.jpg"
          type="image/jpg"
        />
      </head>
      <body className={inter.className + `has-hero-intent has-hospitality has-mobi-footer index-template has-nav-address-bar`}>
        <HeaderSecondary />
        {children}
        <Footer />
      </body>
    </html>
  );
}
