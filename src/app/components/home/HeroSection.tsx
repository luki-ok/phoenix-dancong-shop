import Link from "next/link";

const highlights = [
  { label: "产地", value: "凤凰山核心产区" },
  { label: "香型", value: "花香/果香/蜜香" },
  { label: "焙火", value: "轻焙至中足焙" },
];

export default function HeroSection() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6 fade-up">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-700">
          潮汕凤凰单枞 · 乌龙茶精选
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-[#2b231b] md:text-5xl">
          以香型为线索，挑选最合适的一杯单枞
        </h1>
        <p className="text-base leading-7 text-[#5c4b3a]">
          来自凤凰山的当季单枞，按花香、果香与焙火层次筛选，
          适合日常品饮、送礼与收藏。每款都附上最佳冲泡建议。
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#catalog"
            className="rounded-full bg-[#2f4a3c] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10"
          >
            立即选购
          </Link>
          <Link
            href="/profile"
            className="rounded-full border border-[#2f4a3c]/30 px-6 py-3 text-sm font-semibold text-[#2f4a3c]"
          >
            查看我的偏好
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="tea-card rounded-2xl p-4 text-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-700">
                {item.label}
              </p>
              <p className="mt-2 font-semibold text-[#2b231b]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="tea-card rounded-[32px] p-8 fade-up">
        <div className="flex h-full flex-col justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-700">
              今日推荐
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-[#2b231b]">
              鸭屎香 · 春茶头采
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#5c4b3a]">
              轻焙火保留花香，汤感清亮细腻。适合午后品饮，
              搭配清甜点心更显回甘。
            </p>
          </div>
          <div className="rounded-3xl border border-dashed border-amber-200 bg-gradient-to-br from-[#f6ead7] to-[#fdf7ee] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-700">
              冲泡建议
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[#5c4b3a]">
              <li>投茶量：6g / 110ml</li>
              <li>水温：95℃</li>
              <li>前两泡：5秒出汤</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
