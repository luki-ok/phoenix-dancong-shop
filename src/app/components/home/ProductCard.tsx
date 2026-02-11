import { formatCurrency } from "../../lib/format";
import type { products as productList } from "../../data/products";

type Product = (typeof productList)[number];

export default function ProductCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: () => void;
}) {
  return (
    <div className="tea-card flex flex-col rounded-3xl p-6">
      <div className="mb-5 h-36 rounded-2xl bg-gradient-to-br from-[#f2e1c5] via-[#f7efe2] to-[#fdf8f0]" />
      <div className="flex-1 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-serif text-xl font-semibold text-[#2b231b]">
              {product.name}
            </h3>
            <p className="text-sm text-[#5c4b3a]">{product.subtitle}</p>
          </div>
          <span className="rounded-full border border-amber-200 px-3 py-1 text-xs text-amber-800">
            {product.roast}
          </span>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-amber-700">
          {product.aroma}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-[#5c4b3a]">{product.size}</p>
          <p className="text-lg font-semibold text-[#2b231b]">
            {formatCurrency(product.price)}
          </p>
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="rounded-full bg-[#2f4a3c] px-5 py-2 text-sm font-semibold text-white shadow-md"
        >
          加入购物车
        </button>
      </div>
    </div>
  );
}
