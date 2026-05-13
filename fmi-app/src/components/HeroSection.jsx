const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#f8fafc] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <p className="text-green-500 font-semibold mb-4">
            Welcome to Sedap
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Delicious Food
            <span className="text-green-500"> For Everyone</span>
          </h1>

          <p className="text-gray-500 text-lg mb-8">
            Nikmati pengalaman memesan makanan yang cepat, modern, dan nyaman
            bersama Sedap.
          </p>

          <div className="flex gap-4">
            <button className="bg-green-500 hover:bg-green-600 transition text-white px-8 py-4 rounded-full font-semibold">
              Order Now
            </button>

            <button className="border border-gray-300 hover:border-green-500 hover:text-green-500 transition px-8 py-4 rounded-full font-semibold">
              Explore Menu
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-50"></div>

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
            alt="Food"
            className="rounded-[40px] shadow-2xl object-cover h-[600px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;