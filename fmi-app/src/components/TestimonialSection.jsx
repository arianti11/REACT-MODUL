import testimonials from "../data/testimonials";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-green-500 font-semibold mb-3">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#f8fafc] p-8 rounded-[30px] shadow-md"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-16 h-16 rounded-full"
                />

                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-sm text-gray-400">Customer</p>
                </div>
              </div>

              <p className="text-gray-500 leading-relaxed">
                "{item.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;