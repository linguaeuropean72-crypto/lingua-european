import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export const metadata: Metadata = {

  title:
    "LINGUA EUROPEAN | Batman Yabancı Dil Kursu",


  description:
    "Batman'da İngilizce, Almanca, LGS ve YKS-DİL hazırlık eğitimleri. Goethe, Telc ve ÖSD sınavlarına yönelik profesyonel yabancı dil kursu.",



  keywords: [

    "Batman yabancı dil kursu",

    "Batman İngilizce kursu",

    "Batman Almanca kursu",

    "İngilizce kursu Batman",

    "Almanca kursu Batman",

    "LGS İngilizce hazırlık",

    "YKS Dil hazırlık",

    "Goethe sınavı",

    "Telc sınavı",

    "ÖSD sınavı",

    "LINGUA EUROPEAN",

  ],




  authors: [

    {
      name: "LINGUA EUROPEAN",
    },

  ],



  creator:
    "LINGUA EUROPEAN",



  icons: {

    icon: "/favicon.png",

  },



  openGraph: {


    title:
      "LINGUA EUROPEAN | Batman Yabancı Dil Kursu",



    description:
      "İngilizce, Almanca, LGS ve YKS-DİL eğitimlerinde profesyonel yabancı dil kursu.",



    locale:
      "tr_TR",



    type:
      "website",


  },



  robots: {


    index: true,


    follow: true,


  },


};








export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html

      lang="tr"

      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}

    >


      <body>


        {children}


      </body>


    </html>

  );

}