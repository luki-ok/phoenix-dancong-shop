"use client";

import Link from "next/link";
import { useCart } from "../cart-context";
import { formatCurrency } from "../lib/format";

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem, clear } = useCart();

  return (
    <main className="tea-container space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-700">
          购物车
        </p>
        <h1 className="font-serif text-3xl font-semibold text-[#2b231b]">
          你的单枞选择
        </h1>
      </header>

      {items.length === 0 ? (
        <div className="tea-card rounded-3xl p-10 text-center">
          <p className="text-lg font-semibold text-[#2b231b]">购物车还是空的</p>
          <p className="mt-2 text-sm text-[#5c4b3a]">
            去首页挑选喜欢的香型吧。
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-[#2f4a3c] px-6 py-3 text-sm font-semibold text-white"
          >
            返回首页
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="tea-card flex flex-col gap-4 rounded-3xl p-6 md:flex-row md:items-center"
              >
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-[#f2e1c5] via-[#f7efe2] to-[#fdf8f0]" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="font-serif text-lg font-semibold text-[#2b231b]">
                        {item.name}
                      </h2>
                      <p className="text-sm text-[#5c4b3a]">{item.subtitle}</p>
                    </div>
                    <span className="rounded-full border border-amber-200 px-3 py-1 text-xs text-amber-800">
                      {item.roast}
                    </span>
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-amber-700">
                    {item.aroma}
                  </p>
                  <p className="mt-2 text-sm text-[#5c4b3a]">{item.size}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="h-9 w-9 rounded-full border border-black/10 text-lg"
                  >
                    −
                  </button>
                  <span className="min-w-8 text-center text-sm font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="h-9 w-9 rounded-full border border-black/10 text-lg"
                  >
                    +
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[#5c4b3a]">小计</p>
                  <p className="text-lg font-semibold text-[#2b231b]">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="mt-2 text-xs text-amber-700"
                  >
                    移除
                  </button>
                </div>
              </div>
            ))}
          </div>
          <aside className="tea-card h-fit rounded-3xl p-6">
            <h2 className="font-serif text-xl font-semibold text-[#2b231b]">
              订单摘要
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#5c4b3a]">
              <div className="flex justify-between">
                <span>商品合计</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>运费</span>
                <span>到付</span>
              </div>
              <div className="flex justify-between border-t border-dashed border-black/10 pt-3 text-base font-semibold text-[#2b231b]">
                <span>应付</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
            </div>
            <button
              type="button"
              className="mt-6 w-full rounded-full bg-[#2f4a3c] py-3 text-sm font-semibold text-white"
            >
              继续结算
            </button>
            <button
              type="button"
              onClick={clear}
              className="mt-3 w-full rounded-full border border-black/10 py-3 text-sm font-semibold text-[#2b231b]"
            >
              清空购物车
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}
