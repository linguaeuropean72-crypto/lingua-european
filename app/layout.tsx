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
    "Batman'da İngilizce, Almanca, LGS ve YKS-DİL hazırlık eğitimleri. Goethe, Telc ve ÖSD sınavlarına yönelik profesyonel yabancı dil kursları.",

  keywords: [
    "Batman yabancı dil kursu",
    "Batman İngilizce kursu",
    "Batman Almanca kursu",
    "LGS İngilizce",
    "YKS Dil hazırlık",
    "Goethe sınavı",
    "Telc sınavı",
    "ÖSD sınavı",
  ],


  verification: {

    google:
      "4QkjWNpirWYPYZCzboLimYGGBZvrTqcNkxkX7tB3ilg",

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