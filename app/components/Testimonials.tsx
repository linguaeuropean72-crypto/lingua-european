export default function Testimonials() {

  const comments = [
    {
      name: "Ayşe K.",
      role: "Almanca Öğrencisi",
      comment:
        "Almanca eğitimine başlangıç seviyesinde başladım. Derslerdeki konuşma aktiviteleri sayesinde kendime güvenim arttı.",
      icon: "👩‍🎓",
    },

    {
      name: "Mehmet A.",
      role: "LGS Öğrencisi",
      comment:
        "LGS İngilizce hazırlık sürecinde düzenli takip ve deneme analizleri çok faydalı oldu.",
      icon: "🎓",
    },

    {
      name: "Zeynep T.",
      role: "YKS-DİL Öğrencisi",
      comment:
        "Sınav stratejileri ve akademik çalışmalar sayesinde hedefime daha bilinçli ilerliyorum.",
      icon: "📚",
    },
  ];



  return (

    <section className="bg-gray-50 py-20">


      <div className="mx-auto max-w-7xl px-6">





        {/* Başlık */}

        <div className="mb-12 text-center animate-fadeInUp">


          <h2 className="text-4xl font-extrabold text-gray-900">

            Öğrencilerimiz Ne Diyor?

          </h2>




          <p className="mx-auto mt-4 max-w-2xl text-gray-600">

            Başarı hikayelerimiz ve öğrenci deneyimlerimiz.

          </p>



        </div>








        {/* Kartlar */}

        <div className="grid gap-8 md:grid-cols-3">



          {comments.map((item, index) => (


            <div

              key={index}

              className="
              rounded-3xl
              bg-white
              p-8
              shadow-lg
              transition duration-500
              hover:-translate-y-4
              hover:shadow-2xl
              animate-fadeInUp
              "

              style={{
                animationDelay: `${index * 200}ms`,
              }}

            >






              <div className="mb-6 flex items-center justify-between">


                <div
                  className="
                  flex h-20 w-20
                  items-center justify-center
                  rounded-full
                  bg-[#0A4DA2]/10
                  text-5xl
                  "
                >

                  {item.icon}

                </div>





                <div className="text-xl text-yellow-400">

                  ★★★★★

                </div>



              </div>









              <p className="mb-6 leading-relaxed text-gray-600">

                "{item.comment}"

              </p>







              <div className="border-t pt-5">


                <h3 className="font-bold text-[#0A4DA2]">

                  {item.name}

                </h3>



                <span className="text-sm text-gray-500">

                  {item.role}

                </span>



              </div>





            </div>



          ))}



        </div>





      </div>



    </section>

  );
}