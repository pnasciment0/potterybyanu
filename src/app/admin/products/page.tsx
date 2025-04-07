// src/app/admin/products/page.tsx
"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/shopify";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Manage Products</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div>
          {products.map((product: any) => (
            <div key={product.id} className="mb-4">
              <h2 className="text-2xl">{product.title}</h2>
              <p>{product.body_html}</p>
              <p>Price: ${product.variants[0].price}</p>
              <img
                src={product.images[0].src}
                alt={product.title}
                className="w-24 h-24 object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
