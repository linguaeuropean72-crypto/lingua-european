export default function About() {

  const features = [
    {
      icon: "🌍",
      title: "Avrupa Standartlarında Eğitim",
      description:
        "Goethe, Telc ve ÖSD gibi uluslararası sınavlara yönelik kaliteli eğitim programları.",
    },

    {
      icon: "👨‍🏫",
      title: "Uzman Eğitmen Kadrosu",
      description:
        "Deneyimli öğretmenlerle öğrencilerin hedeflerine yönelik etkili öğrenme süreci.",
    },

    {
      icon: "🎯",
      title: "Hedef Odaklı Eğitim",
      description:
        "LGS, YKS-DİL ve yabancı dil hedeflerinize uygun özel programlar.",
    },

    {
      icon: "🗣️",
      title: "Konuşma Pratiği",
      description:
        "Dili sadece öğrenmek değil, aktif şekilde kullanmak için iletişim odaklı dersler.",
    },
  ];



  return (

    <section
      id="hakkimizda"
      className="bg-gray-50 py-20"
    >


      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">






        {/* Sol Taraf */}


        <div className="animate-fadeInUp">


          <h2 className="mb-6 text-4xl font-extrabold text-gray-900">

            Hakkımızda

          </h2>





          <p className="mb-5 leading-relaxed text-gray-600">

            <span className="font-bold text-[#0A4DA2]">
              LINGUA EUROPEAN
            </span>
            , yabancı dil eğitiminde öğrencilerine modern,
            kaliteli ve hedef odaklı eğitim sunmayı amaçlayan
            profesyonel bir yabancı dil kurs merkezidir.

          </p>





          <p className="mb-8 leading-relaxed text-gray-600">

            İngilizce ve Almanca eğitim programlarımızın yanı sıra
            LGS ve YKS-DİL hazırlık çalışmalarımızla öğrencilerimizin
            akademik başarılarını ve yabancı dil becerilerini geliştirmeyi hedefliyoruz.

          </p>





          <div
            className="
            rounded-3xl
            bg-[#0A4DA2]
            p-6
            text-white
            shadow-xl
            "
          >

            <h3 className="mb-3 text-2xl font-bold">

              Eğitimde Hedefimiz

            </h3>


            <p className="text-blue-100">

              Öğrencilerimize sadece dil bilgisi değil,
              özgüvenli iletişim becerileri kazandırarak
              geleceğe hazırlamak.

            </p>


          </div>




        </div>









        {/* Sağ Taraf */}


        <div className="grid gap-5 sm:grid-cols-2">



          {features.map((item,index)=>(


            <div

              key={index}

              className="
              rounded-3xl
              bg-white
              p-6
              shadow-md
              transition duration-500
              hover:-translate-y-3
              hover:shadow-xl
              animate-fadeInUp
              "

              style={{
                animationDelay:`${index * 150}ms`,
              }}

            >



              <div className="mb-3 text-4xl">

                {item.icon}

              </div>





              <h3 className="font-bold text-[#0A4DA2]">

                {item.title}

              </h3>





              <p className="mt-2 text-sm text-gray-600">

                {item.description}

              </p>




            </div>



          ))}



        </div>





      </div>



    </section>

  );
}