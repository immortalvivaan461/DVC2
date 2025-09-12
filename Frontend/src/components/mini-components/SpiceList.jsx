import React, { useEffect, useState } from "react";
import './Products.css';

const SpiceList = ({ productsPerPage = 8 }) => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch("/data/spices.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Failed to load products:", err));
    }, []);

    const totalPages = Math.ceil(products.length / productsPerPage);

    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = products.slice(
        startIndex,
        startIndex + productsPerPage
    );

    const goToPage = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <div className="product-container">
            <h2 className="font-bold text-lg">Fresh Spices</h2>

            <div className="product-items grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {currentProducts.map(({ id, name, category, price, image }) => (
                    <div
                        key={id}
                        className="border rounded shadow hover:shadow-lg transition p-4 flex flex-col"
                    >
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-48 object-cover rounded mb-4"
                            loading="lazy"
                        />
                        <div className="product-data">
                            <h3 className="font-semibold text-lg">{name}</h3>
                            <p className="text-sm text-gray-500 mb-2 uppercase">{category}</p>
                            <p className="mt-auto font-bold">₹{price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pagination-btn">
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >
                    Prev
                </button>

                {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    return (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`px-3 py-1 border rounded ${page === currentPage
                                    ? "bg-green-600 text-white"
                                    : "hover:bg-green-100"
                                }`}
                        >
                            {page}
                        </button>
                    );
                })}

                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default SpiceList;
