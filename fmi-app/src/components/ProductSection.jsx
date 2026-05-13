import products from "../data/products";

const ProductSection = () => {
  return (
    <section id="products" className="py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-green-500 font-semibold mb-3">
            Popular Products
          </p>

          <h2 className="text-4xl font-bold">
            Our Delicious Food Menu
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {product.name}
                </h3>

                <p className="text-green-500 font-semibold text-lg">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;