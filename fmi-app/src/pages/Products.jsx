import { useState, useEffect } from "react"; // 👈 FIXED: useEffect sudah ditambahkan di sini
import axios from "axios";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

// FIXED: Mengimpor icon agar tidak menyebabkan error "not defined" saat ada error info
import { BsFillExclamationDiamondFill } from "react-icons/bs";

export default function Products() {
    const breadcrumb = ["Dashboard", "Product List"];
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/search?q=${query}`)
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.data.message);
                    return;
                }
                setProducts(response.data.products);
            })
            .catch((err) => {
                setError(err.message || "An unknown error occurred");
            });
    }, [query]);

    const errorInfo = error ? (
        <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
            <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
            {error}
        </div>
    ) : null;

    return (
        <div>
            <PageHeader title="Products" breadcrumb={breadcrumb} />

            {/* Menampilkan pesan error jika ada masalah saat fetch data */}
            {errorInfo}

            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari produk..."
                className="mb-4 p-3 w-full bg-white rounded-2xl shadow-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <div className="overflow-x-auto rounded-2xl shadow-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr className="bg-emerald-600 text-white text-left text-sm font-semibold">
                            <th className="px-6 py-3">#</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Category</th>
                            <th className="px-6 py-3">Price</th>
                            <th className="px-6 py-3">Vendor</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-800">
                        {products && products.length > 0 ? (
                            products.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-700">
                                        {index + 1}.
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900">
                                        <Link to={`/products/${item.id}`} className="text-emerald-400 hover:text-emerald-500">
                                            {item.title}
                                        </Link>'
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">
                                        <span className="bg-gray-100 px-2.5 py-1 rounded-full text-xs font-medium capitalize">
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-emerald-600">
                                        Rp {(item.price * 15000).toLocaleString("id-ID")}
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">{item.brand || "No Brand"}</td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="px-6 py-10 text-center text-gray-400">
                                    Tidak ada produk ditemukan.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}