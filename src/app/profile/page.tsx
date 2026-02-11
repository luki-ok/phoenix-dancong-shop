"use client";

import { useState } from "react";

const aromaOptions = ["花香型", "果香型", "蜜香型", "焙火香"];

export default function ProfilePage() {
  const [preferredAroma, setPreferredAroma] = useState(aromaOptions[0]);
  const [notifyNewTea, setNotifyNewTea] = useState(true);

  return (
    <main className="tea-container space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-700">
          个人主页
        </p>
        <h1 className="font-serif text-3xl font-semibold text-[#2b231b]">
          你的品茶档案
        </h1>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="tea-card rounded-3xl p-8">
          <h2 className="font-serif text-xl font-semibold text-[#2b231b]">
            基本信息
          </h2>
          <div className="mt-4 space-y-3 text-sm text-[#5c4b3a]">
            <p>昵称：山岚</p>
            <p>所在城市：汕头</p>
            <p>常用器具：110ml 盖碗</p>
          </div>
          <div className="mt-6 rounded-2xl border border-dashed border-amber-200 bg-[#fff7e6] p-4 text-sm text-[#5c4b3a]">
            建议：轻焙与花香型更适合你的冲泡习惯。
          </div>
        </section>

        <section className="tea-card rounded-3xl p-8">
          <h2 className="font-serif text-xl font-semibold text-[#2b231b]">
            香型偏好
          </h2>
          <p className="mt-3 text-sm text-[#5c4b3a]">
            选择你最常喝的香型，我们会优先推荐相似风味。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {aromaOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setPreferredAroma(option)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  preferredAroma === option
                    ? "bg-[#2f4a3c] text-white"
                    : "border border-black/10 text-[#2b231b]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </section>
      </div>

      <section className="tea-card rounded-3xl p-8">
        <h2 className="font-serif text-xl font-semibold text-[#2b231b]">
          订阅与提醒
        </h2>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#2b231b]">新茶到货提醒</p>
            <p className="text-sm text-[#5c4b3a]">
              根据偏好推送春茶与秋茶的上新批次。
            </p>
          </div>
          <button
            type="button"
            onClick={() => setNotifyNewTea((prev) => !prev)}
            className={`rounded-full px-5 py-2 text-sm font-semibold ${
              notifyNewTea
                ? "bg-[#2f4a3c] text-white"
                : "border border-black/10 text-[#2b231b]"
            }`}
          >
            {notifyNewTea ? "已开启" : "已关闭"}
          </button>
        </div>
      </section>
    </main>
  );
}
