import Image from "next/image";

export default function Hero() {
  return (

    <section
      id="anasayfa"
      className="bg-[#0A4DA2] py-20 text-white"
    >

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row">


        {/* Sol Taraf */}

        <div className="max-w-2xl animate-fadeInUp">


          <p className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
            📍 Batman'ın Modern Yabancı Dil Kursu
          </p>




          <h1 className="mb-6 text-5xl font-extrabold leading-tight lg:text-7xl">

            Geleceğini

            <span className="block text-yellow-400">
              Yabancı Dil ile
            </span>

            Güçlendir.

          </h1>




          <p className="mb-8 text-lg text-blue-100">

            İngilizce, Almanca, LGS ve YKS-DİL programları ile
            uzman eğitmenlerden eğitim alın.

          </p>





          <div className="flex flex-wrap gap-4">


            <a
              href="https://wa.me/905437912272?text=Merhaba,%20LINGUA%20EUROPEAN%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-[#0A4DA2] transition duration-300 hover:scale-110 hover:shadow-xl"
            >
              Hemen Başvur
            </a>





            <a
              href="#kurslar"
              className="rounded-full border-2 border-white px-8 py-4 font-semibold transition duration-300 hover:bg-white hover:text-[#0A4DA2]"
            >
              Kurslarımız
            </a>



          </div>



        </div>






        {/* Sağ Taraf */}

        <div className="w-full max-w-xl animate-fadeInRight">


          <Image

            src="/hero.jpg"

            alt="LINGUA EUROPEAN Yabancı Dil Kursu"

            width={650}

            height={650}

            priority

            className="rounded-3xl shadow-2xl"

          />


        </div>





      </div>


    </section>

  );
}