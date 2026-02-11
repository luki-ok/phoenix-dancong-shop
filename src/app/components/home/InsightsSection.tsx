export default function InsightsSection() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="tea-card rounded-3xl p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-700">
          品饮笔记
        </p>
        <h3 className="mt-3 font-serif text-2xl font-semibold text-[#2b231b]">
          香气的三重层次
        </h3>
        <p className="mt-4 text-sm leading-7 text-[#5c4b3a]">
          第一泡感受花香与果香，中段呈现蜜韵与坚果，尾水留下木质与回甘。
          适合用盖碗快速出汤，避免过度浸泡影响香气。
        </p>
      </div>
      <div className="tea-card rounded-3xl p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-700">
          订阅提醒
        </p>
        <h3 className="mt-3 font-serif text-2xl font-semibold text-[#2b231b]">
          关注新茶到货
        </h3>
        <p className="mt-4 text-sm leading-7 text-[#5c4b3a]">
          在个人主页中填写你的香型偏好，我们会标注更适合的单枞批次。
        </p>
      </div>
    </section>
  );
}
