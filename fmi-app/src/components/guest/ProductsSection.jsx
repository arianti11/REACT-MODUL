import { useState } from "react";
import products from "../../data/products.json";

const formatRupiah = (number) => {
  // Antisipasi jika data harga (number) kosong atau undefined
  if (number === undefined || number === null) return "Rp 0";
  
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.floor(rating || 0)
              ? "text-yellow-400 fill-current"
              : "text-gray-300 fill-current"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-orange-50">
        {!imgError ? (
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">
            🍽️
          </div>
        )}
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-orange-600 text-xs font-bold px-3 py-1 rounded-full border border-orange-100">
            {product?.category || "Umum"}
          </span>
        </div>
        {/* Sold Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {/* AMAN: Menggunakan optional chaining (?.) untuk mencegah error crash */}
            🔥 {product?.sold?.toLocaleString("id-ID") || 0} terjual
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-base mb-1 line-clamp-1">
          {product?.name || "Nama Produk"}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product?.rating} />
          <span className="text-xs text-gray-500 font-medium">{product?.rating || 0}</span>
        </div>

        <div className="flex items-center justify-between">
          <span
            className="text-lg font-black text-orange-500"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {formatRupiah(product?.price)}
          </span>
          <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-xl transition-colors shadow-md shadow-orange-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  // Antisipasi aman jika data array produk kosong
  const safeProducts = products || [];
  const categories = ["Semua", ...new Set(safeProducts.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? safeProducts
      : safeProducts.filter((p) => p.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Menu Pilihan
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Produk <span className="text-orange-500">Unggulan</span> Kami
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dipilih berdasarkan rating tertinggi dan penjualan terlaris. Dijamin
            bikin kamu ketagihan!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-2xl font-bold hover:bg-orange-600 transition-all duration-200 shadow-xl shadow-orange-200 hover:-translate-y-0.5"
          >
            Lihat Semua Menu
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;