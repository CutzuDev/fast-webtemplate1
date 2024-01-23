import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Start de Coaching en Betaal Achteraf",
  description:
    "Neem deel aan ons coachingprogramma en betaal achteraf. Klik nu om deel te nemen.",
  themeColor: "#000000",
  openGraph: {
    type: "website",
    title: "Start de Coaching en Betaal Achteraf",
    description:
      "Neem deel aan ons coachingprogramma en betaal achteraf. Klik nu om deel te nemen.",
    images: [{ url: "/assets/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[rgb(5,8,23)] text-white`}>
        {children}
      </body>
    </html>
  );
}
