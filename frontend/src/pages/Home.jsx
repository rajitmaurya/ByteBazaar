import { useEffect, useState } from "react";

import Navbar from "./Navbar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* 🔹 Navbar */}
      <Navbar />

      {/* 🔹 Hero Section */}
      <div className="text-center py-16 bg-[#f4f4f4] px-5">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store 🚀</h1>
        <p className="text-xl text-gray-600">Best products at best prices</p>
      </div>

      {/* 🔹 Products Section */}
      <div className="p-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>

        {loading ? (
          <h3 className="text-center text-xl">Loading...</h3>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5 mt-5">
            {products.slice(0, 20).map((product) => (
              <div key={product.id} className="border border-[#ddd] p-4 rounded-lg text-center bg-white shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.description.slice(0, 50)}...</p>
                <p className="text-lg font-bold text-gray-800">₹ {product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
