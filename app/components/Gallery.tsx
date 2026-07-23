export default function Gallery() {

  const images = [
    {
      src: "/gallery1.jpg",
      title: "Modern Sınıflar",
    },
    {
      src: "/gallery2.jpg",
      title: "Konuşma Dersleri",
    },
    {
      src: "/gallery3.jpg",
      title: "Öğrenci Etkinlikleri",
    },
    {
      src: "/gallery4.jpg",
      title: "Eğitim Ortamımız",
    },
  ];



  return (

    <section className="bg-white py-20">


      <div className="mx-auto max-w-7xl px-6">





        {/* Başlık */}

        <div className="mb-12 text-center animate-fadeInUp">


          <h2 className="text-4xl font-extrabold text-gray-900">

            Kursumuzdan Kareler

          </h2>




          <p className="mt-4 text-gray-600">

            Eğitim ortamımızı ve öğrencilerimizin deneyimlerini keşfedin.

          </p>



        </div>







        {/* Galeri */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">



          {images.map((image, index) => (


            <div

              key={index}

              className="
              group
              overflow-hidden
              rounded-3xl
              bg-white
              shadow-lg
              transition duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              animate-fadeInUp
              "

              style={{
                animationDelay: `${index * 150}ms`,
              }}

            >






              {/* Fotoğraf */}

              <div className="relative overflow-hidden">


                <img

                  src={image.src}

                  alt={image.title}

                  className="
                  h-72
                  w-full
                  object-cover
                  transition duration-700
                  group-hover:scale-110
                  "

                />



                {/* Hover Efekti */}

                <div
                  className="
                  absolute inset-0
                  bg-[#0A4DA2]/20
                  opacity-0
                  transition duration-500
                  group-hover:opacity-100
                  "
                />


              </div>







              {/* Başlık */}

              <div className="bg-[#0A4DA2] p-5 text-center text-white">


                <h3 className="text-lg font-bold">

                  {image.title}

                </h3>


              </div>






            </div>



          ))}



        </div>





      </div>



    </section>

  );
}