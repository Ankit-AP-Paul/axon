import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarMain from "@/components/common/NavbarMain";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axon",
  description:
    "Decentralized AI training powered by resource-driven computing and secure data sharing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarMain />
        {children}
      </body>
    </html>
  );
}
