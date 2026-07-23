export default function Footer() {

  return (

    <footer className="bg-[#0A4DA2] text-white">



      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">





        {/* Marka */}

        <div>


          <h2 className="text-3xl font-extrabold text-yellow-400">
            LINGUA EUROPEAN
          </h2>



          <p className="mt-4 leading-relaxed text-blue-100">

            Batman'ın modern yabancı dil kursu.
            İngilizce ve Almanca eğitimlerinde,
            LGS ve YKS-DİL hazırlık programlarında
            hedeflerinize ulaşmanız için yanınızdayız.

          </p>





          {/* Sosyal Medya */}

          <div className="mt-6 flex gap-4">


            <a
              href="#"
              className="
              flex h-10 w-10 items-center justify-center
              rounded-full bg-white/10
              transition hover:bg-yellow-400 hover:text-[#0A4DA2]
              "
            >
              📷
            </a>


            <a
              href="#"
              className="
              flex h-10 w-10 items-center justify-center
              rounded-full bg-white/10
              transition hover:bg-yellow-400 hover:text-[#0A4DA2]
              "
            >
              🎵
            </a>


            <a
              href="#"
              className="
              flex h-10 w-10 items-center justify-center
              rounded-full bg-white/10
              transition hover:bg-yellow-400 hover:text-[#0A4DA2]
              "
            >
              ▶️
            </a>


          </div>



        </div>









        {/* Menü */}

        <div>


          <h3 className="mb-5 text-xl font-bold">
            Hızlı Menü
          </h3>



          <ul className="space-y-3 text-blue-100">


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
                Kurslarımız
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


        </div>









        {/* İletişim */}

        <div>


          <h3 className="mb-5 text-xl font-bold">
            İletişim
          </h3>




          <div className="space-y-4 text-blue-100">


            <p>
              📍 Belde Mahallesi, İstikbal Caddesi,
              22/GC (TirmanPark) Kat:1
              Merkez / Batman
            </p>



            <p>
              📞 0543 791 2272
            </p>



            <p>
              📞 0545 355 8949
            </p>



            <p>
              ✉️ linguaeuropean72@gmail.com
            </p>



          </div>





          <a
            href="https://wa.me/905437912272"
            target="_blank"
            rel="noopener noreferrer"
            className="
            mt-6 inline-block
            rounded-full
            bg-green-500
            px-6 py-3
            font-bold
            text-white
            transition
            hover:bg-green-600
            "
          >

            WhatsApp'tan Yaz

          </a>




        </div>





      </div>









      <div
        className="
        border-t border-white/20
        py-5
        text-center
        text-sm
        text-blue-200
        "
      >

        © {new Date().getFullYear()} LINGUA EUROPEAN.
        Tüm hakları saklıdır.


      </div>




    </footer>

  );
}