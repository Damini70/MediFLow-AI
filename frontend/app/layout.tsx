import type { Metadata } from "next";
import "./globals.css";
import logo from "../assets/logo.jpg"

export const metadata: Metadata = {
  title: "MediFlow AI - An Intelligent Medical Triage",
  description: "An Intelligent Medical Triage System",
  icons:{
    icon:'/logo.jpg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         <head>
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
