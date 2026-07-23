export default function Statistics() {

  const stats = [
    {
      number: "500+",
      title: "Mutlu Öğrenci",
      icon: "🎓",
    },
    {
      number: "10+",
      title: "Uzman Eğitmen",
      icon: "👨‍🏫",
    },
    {
      number: "4",
      title: "Ana Eğitim Programı",
      icon: "🌍",
    },
    {
      number: "100%",
      title: "Öğrenci Memnuniyeti",
      icon: "⭐",
    },
  ];



  return (

    <section className="bg-[#0A4DA2] py-20">


      <div className="mx-auto max-w-7xl px-6">





        {/* Başlık */}

        <div className="mb-12 text-center animate-fadeInUp">


          <h2 className="text-4xl font-extrabold text-white">
            Başarılarımız
          </h2>



          <p className="mt-4 text-blue-100">
            Öğrencilerimizin hedeflerine ulaşması için çalışıyoruz.
          </p>



        </div>







        {/* Kartlar */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">



          {stats.map((item, index) => (


            <div

              key={index}

              className="
              rounded-3xl
              bg-white
              p-8
              text-center
              shadow-xl
              transition duration-500
              hover:-translate-y-4
              hover:shadow-2xl
              animate-fadeInUp
              "

              style={{
                animationDelay: `${index * 150}ms`,
              }}

            >





              <div
                className="
                mx-auto mb-5
                flex h-20 w-20
                items-center justify-center
                rounded-full
                bg-yellow-400
                text-5xl
                transition duration-300
                hover:scale-110
                "
              >

                {item.icon}

              </div>







              <h3 className="text-4xl font-extrabold text-[#0A4DA2]">

                {item.number}

              </h3>






              <p className="mt-3 text-lg font-medium text-gray-600">

                {item.title}

              </p>





            </div>



          ))}



        </div>





      </div>



    </section>

  );
}