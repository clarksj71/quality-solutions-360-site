import "./css/style.css";

import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Quality Solutions 360",
  description: "Engineering efficiency IS the revenue strategy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      <GoogleAnalytics gaId="G-FBMWW2CBCR" />
      </body>
    </html>
  );
}