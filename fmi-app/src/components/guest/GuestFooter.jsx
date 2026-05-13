const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Twitter/X",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const PARTNERS = [
  { name: "GoPay", logo: "💳" },
  { name: "OVO", logo: "💜" },
  { name: "Dana", logo: "💙" },
  { name: "BRI", logo: "🏦" },
  { name: "Mandiri", logo: "🏛️" },
];

const FOOTER_LINKS = {
  Perusahaan: ["Tentang Kami", "Karier", "Blog", "Press Kit"],
  Layanan: ["Pesan Makan", "Catering", "Corporate", "Affiliate"],
  Dukungan: ["FAQ", "Bantuan", "Hubungi Kami", "Status Layanan"],
  Legal: ["Kebijakan Privasi", "Syarat & Ketentuan", "Cookie Policy"],
};

const GuestFooter = () => {
  return (
    <footer id="kontak" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl leading-none">S</span>
              </div>
              <span
                className="text-2xl font-black text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Sedap
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Platform kuliner digital terpercaya yang menghubungkan kamu dengan
              ribuan pilihan makanan lezat dari restoran terbaik di kotamu.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                <span className="text-base">📍</span>
                <span className="text-sm">Jl. Kuliner No. 88, Pekanbaru, Riau 28284</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                <span className="text-base">📧</span>
                <a href="mailto:hello@sedap.id" className="text-sm hover:text-orange-400 transition-colors">
                  hello@sedap.id
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                <span className="text-base">📞</span>
                <a href="tel:+6282100000000" className="text-sm hover:text-orange-400 transition-colors">
                  +62 821-0000-0000
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm font-semibold text-gray-300 mb-3">Ikuti Kami</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-9 h-9 bg-gray-800 hover:bg-orange-500 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-gray-500 font-medium mb-6">
            Partner & Metode Pembayaran
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                <span className="text-xl">{partner.logo}</span>
                <span className="text-sm font-semibold text-gray-300">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Sedap. Hak Cipta Dilindungi.
          </p>
          <p className="text-sm text-gray-500">
            Dibuat dengan{" "}
            <span className="text-orange-500">❤️</span> untuk pecinta kuliner Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GuestFooter;