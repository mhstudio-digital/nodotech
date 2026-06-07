import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://nodotech.vercel.app";
const SITE_NAME = "NodoTech";
const SITE_DESCRIPTION =
  "NodoTech es el blog de tecnología que te ayuda a entender la inteligencia artificial, la automatización y las herramientas digitales que están transformando los negocios en Costa Rica y Latinoamérica.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Tecnología, IA y negocios digitales`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Tecnología, IA y negocios digitales`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-default.svg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Tecnología, IA y negocios digitales`,
    description: SITE_DESCRIPTION,
    images: ["/og-default.svg"],
  },
  verification: {
    google: "HDGp3LB1G51oPAZLcvSLb6JPW6kYBqky3x8muGTv3rg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-[#0A0A0A]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
