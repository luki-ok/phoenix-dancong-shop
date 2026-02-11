"use client";

import { useCart } from "../../cart-context";
import type { products as productList } from "../../data/products";
import ProductCard from "./ProductCard";

type Product = (typeof productList)[number];

export default function CatalogSection({ products }: { products: Product[] }) {
  const { addItem } = useCart();

  return (
    <section id="catalog" className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-amber-700">
            精选单枞
          </p>
          <h2 className="font-serif text-3xl font-semibold text-[#2b231b]">
            依据香气与焙火挑选
          </h2>
        </div>
        <span className="text-sm text-[#5c4b3a]">每款均为 100g 包装</span>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={() => addItem({ ...product })}
          />
        ))}
      </div>
    </section>
  );
}
