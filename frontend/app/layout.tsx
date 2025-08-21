import type { Metadata } from "next";
import "./globals.css";

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
      <body className="">{children}</body>
    </html>
  );
}
