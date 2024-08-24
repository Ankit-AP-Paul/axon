import type { Metadata } from "next";
import {Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavbarMain from "@/components/common/NavbarMain";
import dynamic from "next/dynamic";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axon",
  description:
    "Decentralized AI training powered by resource-driven computing and secure data sharing.",
};

const Navbar = dynamic(() => import("@/components/common/NavbarMain"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
