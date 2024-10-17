'use client'

import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
import NavBar from "./components/Navbar";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <SessionProvider>
        <body>
          <NavBar />
          <Toaster/>
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
