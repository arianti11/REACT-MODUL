const FEATURES = [
  {
    icon: "🚀",
    title: "Pengiriman Super Cepat",
    description:
      "Pesanan kamu tiba dalam waktu 30 menit atau kurang. Driver kami siap 24 jam untuk memastikan makananmu selalu fresh.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: "🍽️",
    title: "Menu Beragam & Lezat",
    description:
      "Ribuan pilihan menu dari ratusan restoran partner terpercaya. Dari makanan tradisional hingga modern, semua tersedia di Sedap.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: "🔒",
    title: "Aman & Terpercaya",
    description:
      "Semua restoran partner kami terverifikasi standar higienitas dan kualitas. Pesan dengan tenang, makan dengan senang.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: "💰",
    title: "Harga Terjangkau",
    description:
      "Nikmati promo dan diskon menarik setiap hari. Makan enak tidak harus mahal, cukup dengan Sedap di genggamanmu.",
    color: "bg-purple-50 text-purple-600",
  },
];

const AboutSection = () => {
  return (
    <section id="tentang" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Tentang Kami
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Kenapa Pilih{" "}
            <span className="text-orange-500">Sedap?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Sedap adalah platform kuliner digital yang menghubungkan kamu dengan
            restoran terbaik di sekitarmu. Kami hadir untuk membuat pengalaman
            makan harianmu menjadi lebih mudah, lebih enak, dan lebih berkesan.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80"
                    alt="Food 1"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="h-32 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=400&q=80"
                    alt="Food 2"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-32 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80"
                    alt="Food 3"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="h-48 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80"
                    alt="Food 4"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-6 py-4 shadow-xl border border-gray-100 flex items-center gap-4 min-w-[240px]">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-2xl">
                🏆
              </div>
              <div>
                <div className="font-black text-gray-900">Restoran Terbaik</div>
                <div className="text-sm text-gray-500">Penghargaan 2024</div>
              </div>
            </div>
          </div>

          {/* Right: Story */}
          <div className="space-y-6">
            <h3
              className="text-3xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Didirikan dengan Cinta untuk{" "}
              <span className="text-orange-500">Kuliner Indonesia</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Sedap lahir dari kegelisahan sederhana: susahnya menemukan makanan
              enak yang bisa dipesan kapan saja. Kami memulai dengan 5 restoran
              partner di 2021, dan kini telah berkembang menjadi platform kuliner
              dengan lebih dari 50 restoran terpilih.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Visi kami sederhana: setiap orang berhak menikmati makanan lezat
              dengan mudah dan terjangkau. Dengan teknologi modern dan tim yang
              berdedikasi, kami terus berinovasi untuk memberikan pengalaman
              terbaik bagimu.
            </p>

            {/* Mini Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { number: "3+", label: "Tahun Berpengalaman" },
                { number: "10K+", label: "Pengguna Aktif" },
                { number: "99%", label: "Kepuasan Pelanggan" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-orange-50 rounded-2xl border border-orange-100"
                >
                  <div
                    className="text-2xl font-black text-orange-500"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white group"
            >
              <div
                className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;