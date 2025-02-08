import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Shared/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spangler Heating and Air",
  description: "Your local HVAC experts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/temp_icon.png" />
      </head>
      <body className= {`${geistSans.variable} ${geistMono.variable} antialiased bg-custom-blue`}>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
