"use client";

import Link from "next/link";
import { useCart } from "./cart-context";

export default function SiteHeader() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-[rgba(251,246,238,0.8)] backdrop-blur">
      <div className="tea-container flex flex-wrap items-center justify-between gap-6 py-5">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-amber-700">
            凤凰山工艺精选
          </p>
          <Link
            href="/"
            className="font-serif text-2xl font-semibold text-[#2b231b]"
          >
            凤凰单枞茶室
          </Link>
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium text-[#2b231b]">
          <Link href="/" className="hover:text-amber-700">
            首页
          </Link>
          <Link href="/cart" className="hover:text-amber-700">
            购物车
          </Link>
          <Link href="/profile" className="hover:text-amber-700">
            个人主页
          </Link>
        </nav>
        <Link
          href="/cart"
          className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[#2b231b] shadow-sm"
        >
          购物车 {itemCount > 0 ? `(${itemCount})` : ""}
        </Link>
      </div>
    </header>
  );
}
