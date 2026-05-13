import { Link } from "react-router-dom";

const GuestHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-4xl font-bold text-black">
          Sedap <span className="text-green-500">.</span>
        </h1>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-green-500 transition">
            Home
          </a>

          <a href="#about" className="hover:text-green-500 transition">
            About
          </a>

          <a href="#products" className="hover:text-green-500 transition">
            Products
          </a>

          <a href="#testimonials" className="hover:text-green-500 transition">
            Testimonials
          </a>

          <a href="#contact" className="hover:text-green-500 transition">
            Contact
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            to="/login"
            className="px-5 py-2 rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default GuestHeader;