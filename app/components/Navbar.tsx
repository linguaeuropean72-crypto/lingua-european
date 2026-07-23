import Image from "next/image";

export default function Navbar() {

  return (

    <header className="sticky top-0 z-50 bg-[#0A4DA2] shadow-lg">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">


        {/* Logo */}

        <a
          href="/"
          className="flex items-center"
        >

          <Image

            src="/logo.png"

            alt="LINGUA EUROPEAN"

            width={140}

            height={50}

            priority

            className="h-auto w-[140px]"

          />

        </a>





        {/* Menü */}

        <ul className="hidden items-center gap-8 font-medium text-white md:flex">


          <li>
            <a
              href="#anasayfa"
              className="transition hover:text-yellow-300"
            >
              Ana Sayfa
            </a>
          </li>



          <li>
            <a
              href="#kurslar"
              className="transition hover:text-yellow-300"
            >
              Kurslar
            </a>
          </li>



          <li>
            <a
              href="#hakkimizda"
              className="transition hover:text-yellow-300"
            >
              Hakkımızda
            </a>
          </li>



          <li>
            <a
              href="#iletisim"
              className="transition hover:text-yellow-300"
            >
              İletişim
            </a>
          </li>


        </ul>






        {/* Başvuru Butonu */}

        <a

          href="https://wa.me/905437912272"

          target="_blank"

          rel="noopener noreferrer"

          className="
          hidden
          rounded-full
          bg-yellow-400
          px-5
          py-3
          font-bold
          text-[#0A4DA2]
          transition
          hover:bg-white
          md:inline-block
          "

        >

          Hemen Başvur

        </a>



      </nav>

    </header>

  );

}