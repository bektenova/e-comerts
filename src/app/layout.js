import { Montserrat } from "next/font/google";
import "./globals.css";

import CallToAction from "@/components/CallToActions";
import Header from "../components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Inspire - Your Style",
  description: "Create the best version of yourself",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <CallToAction />
        <Header />

        {children}
      </body>
    </html>
  );
}
