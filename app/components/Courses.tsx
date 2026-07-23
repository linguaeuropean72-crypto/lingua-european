export default function Courses() {

  const courses = [
    {
      title: "Almanca Kursları",
      image: "/german.jpg",
      description:
        "A1, A2, B1 ve B2 seviyelerinde Almanca eğitimi. Goethe, Telc ve ÖSD sınavlarına hazırlık.",
      message:
        "Merhaba, Almanca kursları hakkında bilgi almak istiyorum.",
    },

    {
      title: "İngilizce Kursları",
      image: "/english.jpg",
      description:
        "Her yaş grubuna uygun İngilizce programları ve konuşma odaklı eğitim.",
      message:
        "Merhaba, İngilizce kursları hakkında bilgi almak istiyorum.",
    },

    {
      title: "LGS İngilizce Hazırlık",
      image: "/lgs.jpg",
      description:
        "7. ve 8. sınıf öğrencileri için LGS sınavına yönelik İngilizce eğitimi.",
      message:
        "Merhaba, LGS İngilizce hazırlık programı hakkında bilgi almak istiyorum.",
    },

    {
      title: "YKS-DİL Hazırlık",
      image: "/yks.jpg",
      description:
        "Dil öğrencileri için sınav stratejileri, deneme analizleri ve akademik hazırlık.",
      message:
        "Merhaba, YKS-DİL hazırlık programı hakkında bilgi almak istiyorum.",
    },
  ];



  return (

    <section id="kurslar" className="py-20 bg-gray-50">


      <div className="mx-auto max-w-7xl px-6">



        {/* Başlık */}

        <div className="mb-12 text-center animate-fadeInUp">


          <h2 className="text-4xl font-extrabold text-gray-900">
            Kurslarımız
          </h2>



          <p className="mt-4 text-gray-600">
            Hedeflerinize uygun profesyonel eğitim programları.
          </p>


        </div>







        {/* Kartlar */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">



          {courses.map((course, index) => (


            <div
              key={index}
              className="
              group overflow-hidden rounded-3xl bg-white 
              shadow-lg transition duration-500
              hover:-translate-y-4 hover:shadow-2xl
              animate-fadeInUp
              "
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >





              {/* Görsel */}

              <div className="overflow-hidden">


                <img

                  src={course.image}

                  alt={course.title}

                  className="
                  h-56 w-full object-cover
                  transition duration-700
                  group-hover:scale-110
                  "

                />


              </div>







              {/* İçerik */}

              <div className="p-6">



                <h3 className="mb-3 text-xl font-bold text-[#0A4DA2]">

                  {course.title}

                </h3>





                <p className="mb-6 min-h-[75px] text-gray-600">

                  {course.description}

                </p>







                <a

                  href={`https://wa.me/905437912272?text=${encodeURIComponent(course.message)}`}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="
                  inline-block rounded-full
                  bg-[#0A4DA2]
                  px-6 py-3
                  font-semibold text-white
                  transition duration-300
                  hover:bg-blue-800
                  hover:scale-105
                  "

                >

                  Bilgi Al

                </a>





              </div>




            </div>



          ))}




        </div>




      </div>



    </section>

  );
}