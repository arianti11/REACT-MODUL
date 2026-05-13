import testimonials from "../../data/testimonials.json";

const StarDisplay = ({ rating }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-200 fill-current"}`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, featured }) => (
  <div
    className={`relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group ${
      featured
        ? "bg-orange-500 border-orange-500 text-white"
        : "bg-white border-gray-100 hover:border-orange-200"
    }`}
  >
    {/* Quote Icon */}
    <div
      className={`absolute top-6 right-6 text-5xl font-black leading-none opacity-10 ${
        featured ? "text-white" : "text-orange-500"
      }`}
      style={{ fontFamily: "Georgia, serif" }}
    >
      &ldquo;
    </div>

    {/* Stars */}
    <div className="mb-4">
      <StarDisplay rating={testimonial.rating} />
    </div>

    {/* Review Text */}
    <p
      className={`text-sm leading-relaxed mb-6 ${
        featured ? "text-orange-100" : "text-gray-600"
      }`}
    >
      &ldquo;{testimonial.review}&rdquo;
    </p>

    {/* User Info */}
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-white shadow-md flex-shrink-0 bg-orange-100">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=f97316&color=fff&size=100`;
          }}
        />
      </div>
      <div>
        <div
          className={`font-bold text-base ${featured ? "text-white" : "text-gray-900"}`}
        >
          {testimonial.name}
        </div>
        <div
          className={`text-xs font-medium ${
            featured ? "text-orange-200" : "text-orange-500"
          }`}
        >
          {testimonial.role}
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimoni" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Testimoni
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Apa Kata{" "}
            <span className="text-orange-500">Pelanggan</span> Kami?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Lebih dari 10.000 pelanggan puas sudah mempercayai Sedap sebagai
            teman makan sehari-hari mereka. Ini kisah mereka.
          </p>
        </div>

        {/* Overall Rating Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 mb-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div
              className="text-6xl font-black mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              4.9
            </div>
            <div className="flex justify-center sm:justify-start mb-1">
              <StarDisplay rating={5} />
            </div>
            <div className="text-orange-100 text-sm font-medium">
              dari 10.000+ ulasan
            </div>
          </div>
          <div className="hidden sm:block w-px h-20 bg-orange-400/50"></div>
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { number: "97%", label: "Pelanggan Puas" },
              { number: "4.8★", label: "Rating Produk" },
              { number: "4.9★", label: "Rating Layanan" },
            ].map((item) => (
              <div key={item.label}>
                <div
                  className="text-2xl font-black"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.number}
                </div>
                <div className="text-orange-200 text-xs font-medium mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              featured={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;