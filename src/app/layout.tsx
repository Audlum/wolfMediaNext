import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/widgets/layout";
import localFont from 'next/font/local'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Wolf Media",
    template: "Wolf Media" 
  },

  description: " Мы помогаем брендам развиваться, автоматизируем бизнес-процессы и создаем эффективные сообщества",

  keywords: ["автоматизация", "бизнес", "развитие брендов", "сообщества", ""],

  authors: [{ name: "Название компании", url: "https://wolf-media-next.vercel.app/" }],


  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "hhttps://wolf-media-next.vercel.app/",
  },

  icons: {
    icon: "/header/logoMini.svg",
    apple: "/header/logoMini.svg",
  },
};

const CeraPro = localFont({
  src: [
    {
      path: '../../public/fonts/CeraPro/CeraPro-Thin.woff',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../../public/fonts/CeraPro/CeraPro-Light.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/CeraPro/CeraPro-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/CeraPro/CeraPro-Medium.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/CeraPro/CeraPro-Bold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/CeraPro/CeraPro-Black.woff',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../../public/fonts/CeraPro/CeraPro-Italic.woff',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/CeraPro/CeraPro-BoldItalic.woff',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../../public/fonts/CeraPro/CeraPro-BlackItalic.woff',
      weight: '900',
      style: 'italic'
    },
  ],
  variable: '--font-cera-pro'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/geoform" />
        {/* Дополнительный мета-тег для телефонов */}
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body className={`${CeraPro.className} antialiased`}>
        <Layout children={children} />
      </body>
    </html>
  );
}