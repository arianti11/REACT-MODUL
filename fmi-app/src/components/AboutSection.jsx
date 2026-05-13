const AboutSection = () => {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
          alt="Restaurant"
          className="rounded-[30px] shadow-xl"
        />

        <div>
          <p className="text-green-500 font-semibold mb-3">About Sedap</p>

          <h2 className="text-4xl font-bold mb-6">
            Modern Restaurant Experience
          </h2>

          <p className="text-gray-500 leading-relaxed mb-6">
            Sedap adalah aplikasi restoran modern yang membantu pelanggan
            menemukan makanan favorit dengan mudah dan cepat. Dengan tampilan
            clean dan pelayanan terbaik, Sedap memberikan pengalaman memesan
            makanan yang nyaman.
          </p>

          <button className="bg-green-500 hover:bg-green-600 transition text-white px-7 py-3 rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;