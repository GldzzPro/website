import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import { MainLayout } from "./components/MainLayout/MainLayout";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ajiz Website",
  description: "Builders of today leaders of tomorrow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <MainLayout>
          <Navbar />
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
