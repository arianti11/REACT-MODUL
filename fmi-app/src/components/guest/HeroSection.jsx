import { Link } from "react-router-dom";

const STATS = [
  { number: "500+", label: "Menu Tersedia" },
  { number: "10K+", label: "Pelanggan Puas" },
  { number: "50+", label: "Restoran Partner" },
];

const BADGE_ITEMS = [
  { emoji: "🍜", label: "Mie" },
  { emoji: "🍗", label: "Ayam" },
  { emoji: "🥘", label: "Lauk" },
  { emoji: "🍱", label: "Nasi" },
];

const HeroSection = () => {
  return (
    <section
      id="beranda"
      className="min-h-screen pt-16 bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              Platform Kuliner Terpercaya #1 Indonesia
            </div>

            {/* Headline */}
            <h1
              className="text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Nikmati{" "}
              <span className="text-orange-500 relative">
                Kelezatan
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C50 3 100 10 150 6C200 2 250 9 298 5"
                    stroke="#F97316"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              Tanpa Batas
            </h1>

            {/* Subheadline */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Temukan ribuan menu lezat dari restoran terbaik di kotamu. Pesan
              mudah, diantar cepat, dijamin bikin ketagihan setiap hari.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-2xl font-bold text-base hover:bg-orange-600 transition-all duration-200 shadow-xl shadow-orange-200 hover:-translate-y-0.5"
              >
                Mulai Pesan Sekarang
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-2xl font-bold text-base hover:border-orange-400 hover:text-orange-500 transition-all duration-200 hover:-translate-y-0.5"
              >
                Lihat Menu
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-2">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div
                    className="text-3xl font-black text-orange-500"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image + Floating Elements */}
          <div className="relative mt-8 lg:mt-0">
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-orange-100 rounded-full opacity-60 -z-10"></div>

            {/* Main Image */}
            <div className="relative w-full max-w-lg mx-auto">
              <div className="w-full aspect-square max-w-md mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl shadow-orange-100">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80"
                  alt="Makanan Lezat Sedap"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Card: Rating */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <span className="text-lg">⭐</span>
                </div>
                <div>
                  <div className="font-black text-gray-900 text-lg leading-none">4.9 / 5</div>
                  <div className="text-xs text-gray-500 font-medium">Rating Pengguna</div>
                </div>
              </div>

              {/* Floating Card: Order */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-green-600">LIVE ORDER</span>
                </div>
                <div className="font-black text-gray-900">+128</div>
                <div className="text-xs text-gray-500">pesanan hari ini</div>
              </div>
            </div>

            {/* Category Badges */}
            <div className="flex justify-center gap-3 mt-8 flex-wrap">
              {BADGE_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-white border border-gray-100 px-4 py-2 rounded-full shadow-sm hover:border-orange-300 hover:shadow-md transition-all cursor-pointer"
                >
                  <span className="text-lg">{item.emoji}</span>
                  <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;