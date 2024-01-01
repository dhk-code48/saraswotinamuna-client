import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import getSite from "@/actions/get-site";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saraswoti Namuna Secondary School",
  openGraph: {
    images: [{ url: "/teachers.jpg", alt: "Saraswoti Namuna Secondary School Teachers" }],

    description:
      "Saraswoti Namuna Secondary School website get news, notices, event informatiom directly at your mobie phone ",
  },
  description:
    "Saraswoti Namuna Secondary School website get news, notices, event informatiom directly at your mobie phone ",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const siteInfo = await getSite();
  console.log(siteInfo);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar categories={siteInfo.categories} />
        {children}
        <br />
        <Footer category={siteInfo.categories} />
        <div id="fb-root"></div>
        <Script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0&appId=152017797876384"
          nonce="r3UW01Do"
        ></Script>
      </body>
    </html>
  );
}
