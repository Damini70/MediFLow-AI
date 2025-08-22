import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "MediFlow AI - An Intelligent Medical Triage",
  description: "An Intelligent Medical Triage System",
  icons: {
  icon: "/logoImg.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logoImg.jpeg" />
      </head>
      <body className="">  <Navbar/>{children} <Footer /></body>
    </html>
  );
}
