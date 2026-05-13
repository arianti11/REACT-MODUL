import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const GuestFooter = () => {
  return (
    <footer
      id="contact"
      className="bg-black text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Sedap <span className="text-green-500">.</span>
          </h1>

          <p className="text-gray-400">
            Modern restaurant & food ordering platform.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">Contact</h3>

          <p className="text-gray-400">Jl. Sudirman No. 12</p>
          <p className="text-gray-400">sedap@email.com</p>
          <p className="text-gray-400">0812-3456-7890</p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">Social Media</h3>

          <div className="flex gap-4 text-2xl">
            <FaInstagram className="hover:text-green-500 cursor-pointer transition" />
            <FaFacebook className="hover:text-green-500 cursor-pointer transition" />
            <FaTwitter className="hover:text-green-500 cursor-pointer transition" />
          </div>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">Partners</h3>

          <div className="flex gap-4">
            <div className="bg-white text-black px-4 py-2 rounded-xl font-bold">
              Gojek
            </div>

            <div className="bg-white text-black px-4 py-2 rounded-xl font-bold">
              Grab
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
        © 2025 Sedap Restaurant. All Rights Reserved.
      </div>
    </footer>
  );
};

export default GuestFooter;