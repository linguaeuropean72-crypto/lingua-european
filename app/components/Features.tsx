export default function Features() {
  const features = [
    {
      icon: "🎓",
      title: "Uzman Eğitmenler",
      description:
        "Alanında deneyimli öğretmenlerle kaliteli ve etkili yabancı dil eğitimi.",
    },
    {
      icon: "🌍",
      title: "Uluslararası Hazırlık",
      description:
        "Goethe, Telc ve ÖSD sınavlarına yönelik profesyonel hazırlık programları.",
    },
    {
      icon: "🗣️",
      title: "Konuşma Odaklı Eğitim",
      description:
        "Dili sadece öğrenmek değil, aktif şekilde kullanmak için iletişim odaklı dersler.",
    },
    {
      icon: "📚",
      title: "Bireysel Takip",
      description:
        "Öğrenci gelişimini takip eden, hedef odaklı eğitim sistemi.",
    },
  ];


  return (
    <section className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">


        <div className="mb-12 text-center">

          <h2 className="text-4xl font-extrabold text-gray-900">
            Neden{" "}
            <span className="text-[#0A4DA2]">
              LINGUA EUROPEAN?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Modern eğitim anlayışı ve öğrenci odaklı yaklaşımımızla
            hedeflerinize birlikte ulaşıyoruz.
          </p>

        </div>



        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">


          {features.map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >


              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#0A4DA2]/10 text-5xl transition group-hover:scale-110">
                {item.icon}
              </div>


              <h3 className="mb-3 text-xl font-bold text-[#0A4DA2]">
                {item.title}
              </h3>


              <p className="leading-relaxed text-gray-600">
                {item.description}
              </p>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}