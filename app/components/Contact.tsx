export default function Contact() {
  return (

    <section id="iletisim" className="py-20">


      <div className="mx-auto max-w-7xl px-6">


        <div className="mb-12 text-center">


          <h2 className="text-4xl font-extrabold text-gray-900">
            İletişime Geçin
          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Eğitim fırsatları hakkında detaylı bilgi almak ve
            ücretsiz seviye tespit için bize ulaşın.
          </p>


        </div>





        <div className="grid gap-8 lg:grid-cols-2">



          {/* İletişim Kartı */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">


            <h3 className="mb-8 text-3xl font-extrabold text-[#0A4DA2]">
              LINGUA EUROPEAN
            </h3>




            <div className="space-y-5">



              <div className="rounded-2xl bg-gray-50 p-4">
                📍
                <span className="ml-2 text-gray-700">
                  Belde Mahallesi, İstikbal Caddesi,
                  22/GC (TirmanPark) Kat:1
                  Merkez / Batman
                </span>
              </div>




              <div className="rounded-2xl bg-gray-50 p-4">
                📞
                <span className="ml-2 text-gray-700">
                  0543 791 2272
                </span>
              </div>




              <div className="rounded-2xl bg-gray-50 p-4">
                📞
                <span className="ml-2 text-gray-700">
                  0545 355 8949
                </span>
              </div>




              <div className="rounded-2xl bg-gray-50 p-4">
                ✉️
                <span className="ml-2 text-gray-700">
                  linguaeuropean72@gmail.com
                </span>
              </div>



            </div>






            <a
              href="https://wa.me/905437912272?text=Merhaba,%20LINGUA%20EUROPEAN%20yabancı%20dil%20kursları%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
            >
              WhatsApp'tan Yaz
            </a>




          </div>








          {/* Harita */}

          <div className="overflow-hidden rounded-3xl shadow-xl">


            <iframe
              src="https://www.google.com/maps?q=Lingua%20European%20Batman&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
            />


          </div>





        </div>



      </div>


    </section>

  );
}